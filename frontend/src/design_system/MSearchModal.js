import React from "react";
import { DropdownWrapper } from "../layout/Food/styled-components";
import { SearchInput } from "./SearchInput";
import { Button } from "react-bootstrap";

export const MSearchModal = ({
  setShowSearchModal,
  modalId,
  formData,
  setFormData,
  handleExclusionButton,
  excFormData,
  setExcFormData,
  exclusion,
  handleSearch,
}) => {
  const handleClose = () => {
    setShowSearchModal(false);
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
              Search Criteria
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
            <DropdownWrapper>
              <SearchInput
                formData={formData}
                setFormData={setFormData}
                isEdit={true}
              />
              <Button
                className="w-100"
                onClick={handleExclusionButton}
                style={{
                  color: "#E1E8ED",
                  backgroundColor: "#1DA1F2",
                  border: "none",
                }}
              >
                Exclusion Criteria
              </Button>
            </DropdownWrapper>
            {exclusion ? (
              <DropdownWrapper>
                <SearchInput
                  formData={excFormData}
                  setFormData={setExcFormData}
                  isEdit={true}
                />
              </DropdownWrapper>
            ) : null}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
              style={{
                color: "#E1E8ED",
                backgroundColor: "#657786",
                border: "none",
              }}
            >
              Close
            </button>
            <button
              type="button"
              data-dismiss="modal"
              className="btn btn-primary"
              onClick={handleSearch}
              style={{
                color: "#E1E8ED",
                backgroundColor: "#1DA1F2",
                border: "none",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
