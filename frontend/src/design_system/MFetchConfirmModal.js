import React from "react";
import { getBusinessDetailById } from "../utils/api";

export const MFetchConfirmModal = ({ tableData, locationIdx, setIsOpen }) => {
  const handleFetchGoogleInfo = async () => {
    const abortController = new AbortController();
    await getBusinessDetailById(
      tableData[locationIdx].id,
      abortController.signals
    );
    setIsOpen(false);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="modal fade"
      id="fetchModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Update Location
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
            Location information is already exist. Do you want to update it?
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
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={handleFetchGoogleInfo}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
