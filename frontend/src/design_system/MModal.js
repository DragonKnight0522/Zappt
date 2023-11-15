import React, { useEffect, useState } from "react";
import { AdminInput } from "../layout/Food/AdminInput";
import { useNavigate } from "react-router-dom";
import { createFood, updateFood } from "../utils/api";
import { isEmpty } from "../utils/util";
import { v4 as uuidv4 } from "uuid";

export const MModal = ({ tableData = {}, rowId, setIsOpen, modalId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const id = uuidv4();
    const tempFormData = isEmpty(tableData[rowId]) ? { id } : tableData[rowId];
    setFormData(tempFormData);

    // eslint-disable-next-line
  }, [rowId]);

  function submitHandler(event) {
    event.preventDefault();
    const abortController = new AbortController();

    if (isEmpty(rowId)) {
      createFood(formData, abortController.signal)
        .then((data) => {
          console.log(data);
          navigate(0);
        })
        .catch("null");
    } else {
      updateFood(formData, abortController.signal)
        .then((data) => {
          navigate(0);
        })
        .catch("null");
    }
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {isEmpty(rowId) ? "Add Location" : "Edit Location"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <AdminInput
              formData={formData}
              setFormData={setFormData}
              tableData={tableData[rowId]}
              isEdit={!isEmpty(rowId)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              {isEmpty(rowId) ? "Submit" : "Save changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
