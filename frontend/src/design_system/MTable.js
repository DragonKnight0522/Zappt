import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { MModal } from "./MModal";
import { MDeleteModal } from "./MDeleteModal";
import { MFetchConfirmModal } from "./MFetchConfirmModal";
import { isEmpty } from "../utils/util";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getBusinessDetailById } from "../utils/api";
import { TableWrapper } from "./styled-components";
import {
  close2Others,
  levelOfMixology,
  sports,
  parking,
} from "../layout/Food/DrowndownList";

export const MTable = ({
  columnNames,
  tableData,
  editable = false,
  setSortFormData = () => {},
  sortFormData = {},
}) => {
  const [rowId, setRowId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [locationIdx, setLocationIdx] = useState(null);
  const [loading, setLoading] = useState(false);
  const columnsHeader = columnNames?.map((header, idx) => {
    return (
      <th
        key={idx}
        className="cursor-pointer"
        onClick={() =>
          setSortFormData({
            ...sortFormData,
            [header]: !sortFormData[header],
          })
        }
      >
        <span className="d-flex justify-content-between">
          {header}
          {isEmpty(sortFormData[header]) ? (
            ""
          ) : sortFormData[header] ? (
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M17 11l-5-5-5 5" />
              <path d="M17 18l-5-5-5 5" />
            </svg>
          ) : (
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          )}
        </span>
      </th>
    );
  });

  const editEntry = (idx) => {
    setIsOpen(true);
    setRowId(idx);
  };

  const deleteEntry = (idx) => {
    setIsOpen(true);
    setDeleteId(idx);
  };

  const handleShowFetchModal = async (idx) => {
    if (loading) return;
    setLoading(true);
    setIsOpen(true);
    setLocationIdx(idx);
    setLoading(false);
  };

  const handleFetchGoogleInfo = async (id) => {
    if (loading) return;
    setLoading(true);
    const abortController = new AbortController();
    await getBusinessDetailById(id, abortController.signals);
    setLoading(false);
  };

  const mapValuesToText = (values, key) => {
    let mappedValues = values;
    if (key === "mixology") {
      const mappedText = levelOfMixology.filter((v) =>
        values.includes(v.value.toString())
      );
      mappedValues = mappedText.map((v) => v.text);
    } else if (key === "sports") {
      const mappedText = sports.filter((v) =>
        values.includes(v.value.toString())
      );
      mappedValues = mappedText.map((v) => v.text);
    } else if (key === "close2Others") {
      const mappedText = close2Others.filter((v) =>
        values.includes(v.value.toString())
      );
      mappedValues = mappedText.map((v) => v.text);
    } else if (key === "parking") {
      const mappedText = parking.filter((v) =>
        values.includes(v.value.toString())
      );
      mappedValues = mappedText.map((v) => v.text);
    }
    return mappedValues.join(", ");
  };

  const rows = tableData?.map((rows, idx) => {
    // const columnNames = Object.keys(rows).filter(
    // 	(columnName) => columnName !== "id"
    // );
    return (
      <tr key={"row" + idx}>
        {columnNames.map((key, index) => (
          <td key={"col" + index}>
            {!isEmpty(rows[key]) ? (
              key === "name" ? (
                <Link to={`/food/${rows.id}`}>{rows[key]}</Link>
              ) : Array.isArray(rows[key]) ? (
                mapValuesToText(rows[key], key)
              ) : (
                rows[key]
              )
            ) : key === "actions" && !editable ? (
              <div className="d-flex flex-column">
                <button
                  className="btn btn-secondary"
                  onClick={() => editEntry(idx)}
                  type="button"
                  data-toggle="modal"
                  data-target="#updateModal"
                >
                  edit
                </button>

                <Button
                  className="my-1"
                  onClick={() =>
                    isEmpty(rows.place_id)
                      ? handleFetchGoogleInfo(rows.id)
                      : handleShowFetchModal(idx)
                  }
                  data-toggle="modal"
                  data-target={isEmpty(rows.place_id) ? "" : "#fetchModal"}
                >
                  {loading ? "Loading..." : "fetch"}
                </Button>

                <button
                  onClick={() => deleteEntry(idx)}
                  type="button"
                  className="btn btn-danger ml-2"
                  data-toggle="modal"
                  data-target="#deleteModal"
                >
                  delete
                </button>
              </div>
            ) : null}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div>
      {isOpen ? (
        <MModal
          modalId="updateModal"
          setIsOpen={setIsOpen}
          tableData={tableData}
          rowId={rowId}
        />
      ) : null}
      {isOpen ? (
        <MFetchConfirmModal
          modalId="googleFetchModal"
          setIsOpen={setIsOpen}
          locationIdx={locationIdx}
          tableData={tableData}
        />
      ) : null}
      {isOpen ? (
        <MDeleteModal
          setIsOpen={setIsOpen}
          deleteId={deleteId}
          tableData={tableData}
        />
      ) : null}
      <TableWrapper>
        <Table striped bordered hover>
          <thead>
            <tr>{columnsHeader}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </TableWrapper>
    </div>
  );
};
