import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteFood } from "../utils/api";

export const MDeleteModal = ({ tableData, deleteId, setIsOpen }) => {
  const navigate = useNavigate();
  const [formData] = useState(tableData[deleteId]);
  function deleteHandler(event) {
    event.preventDefault();
    const abortController = new AbortController();

    deleteFood(formData, abortController.signal)
      .then((data) => {
        console.log(data);
        navigate(0);
      })
      .catch("null");
  }
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Entry
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
          <div className="modal-body">Sure you want to delete?</div>
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
              className="btn btn-danger"
              onClick={deleteHandler}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
