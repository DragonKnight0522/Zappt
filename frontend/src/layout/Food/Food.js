import React, { useState, useEffect } from "react";
import { MTable } from "../../design_system/MTable";
import { listFoodSearch } from "../../utils/api";
import { isEmpty } from "../../utils/util";
import { MInput } from "../../design_system/MInput";
import { MModal } from "../../design_system/MModal";
import MPagination from "../../design_system/MPagination";

export const Food = () => {
  const [tableData, setTableData] = useState([]);
  const [columnNames, setColumnNames] = useState([]);
  const [searchFormData, setSearchFormData] = useState({});
  const [sortFormData, setSortFormData] = useState({});
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalSize, setTotalSize] = useState(1);

  function loadFood() {
    setTableData([]);
    const abortController = new AbortController();
    listFoodSearch(
      { sort: sortFormData, search: searchFormData.search, page: currentPage },
      abortController.signal
    )
      .then((data) => {
        setTableData(data.data);
        setTotalSize(data.total);
      })
      .catch("null");
  }

  useEffect(() => {
    loadFood();
    // eslint-disable-next-line
  }, [sortFormData, currentPage]);

  useEffect(() => {
    if (!isEmpty(tableData)) {
      setColumnNames([
        "name",
        "address",
        "actions",
        "ambiance",
        "games",
        "mixology",
        "beerCost",
        "drinkCost",
        "sports",
        "offersFood",
        "events",
        "close2Others",
        "happyHour",
        "dancing",
        "barMusic",
        "typesOfSports",
        "dogFriendly",
        "amenities",
        "parking",
        "neighborhood",
        "drinkSpecialties",
        "time2visit",
      ]);
    }
  }, [tableData]);

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      loadFood();
      event.target.blur();
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="d-block d-sm-flex justify-content-between my-2 align-items-center">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h1 className="m-0">Admin</h1>
          <button
            onClick={() => setIsAddOpen(true)}
            type="button"
            className="btn btn-primary mx-1"
            data-toggle="modal"
            data-target="#createModal"
          >
            Add Location
          </button>
        </div>
        <MInput
          className="my-1 my-sm-1"
          attribute="search"
          formData={searchFormData}
          setFormData={setSearchFormData}
          editData="Search"
          isEdit={true}
          onKeyDown={handlePressEnter}
        />
        <MPagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          total={totalSize}
          pageSize={10}
        />
      </div>
      <MTable
        columnNames={columnNames}
        tableData={tableData}
        setSortFormData={setSortFormData}
        sortFormData={sortFormData}
      />
      {isAddOpen ? (
        <MModal modalId="createModal" setIsOpen={setIsAddOpen} />
      ) : null}
    </div>
  );
};
