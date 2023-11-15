import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import { v4 as uuidv4 } from "uuid";
import { isEmpty } from "../utils/util";
import { DropdownWrapper } from "./styled-components";

export const MDropdown = ({
  attribute,
  formData,
  setFormData,
  listItems,
  editData,
  isEdit,
  isMulti = false,
  label,
}) => {
  const [selection, setSelection] = useState("");

  useEffect(() => {
    if (!isEmpty(editData)) {
      if (Array.isArray(editData)) {
        const selectedItems = listItems.filter((item) =>
          editData.includes(item.value.toString())
        );
        const newSelection = selectedItems.map((item) => item.text);
        setSelection(!isEmpty(newSelection) ? newSelection : []);
      } else {
        const selectedText = listItems.find(
          (item) => item.value.toString() === editData
        );
        setSelection(!isEmpty(selectedText) ? selectedText : "");
      }
    }
    // eslint-disable-next-line
  }, [editData]);

  const onChangeHandler = (event) => {
    let index = event.target.closest("[data-index]").getAttribute("data-index");
    let value;
    let text;
    let newValue;
    let newText;

    if (index > -1) {
      value = listItems[index].value;
      text = listItems[index].text;
    }

    if (isMulti) {
      if (index < 0) {
        newValue = [];
        newText = [];
      } else if (isEmpty(formData) || !Array.isArray(formData[attribute])) {
        newValue = [value];
        newText = [text];
      } else if (!formData[attribute].includes(value)) {
        newValue = [...formData[attribute], value];
        newText = Array.isArray(selection) ? [...selection, text] : [text];
      } else {
        newValue = formData[attribute].filter((item) => item !== value);
        newText = selection.filter((item) => item !== text);
      }
    } else {
      newValue = index < 0 ? null : value;
      newText = index < 0 ? null : text;
    }
    if (isEdit) {
      setFormData({
        ...formData,
        [attribute]: newValue,
      });
    } else {
      // const myUUID = uuidv4();
      setFormData({
        ...formData,
        // id: myUUID,
        [attribute]: newValue,
      });
    }
    setSelection(isEmpty(newText) ? "No Preference" : newText);
  };

  return (
    <DropdownWrapper>
      <div className="dropdownButton">
        <DropdownButton
          title={
            isMulti && Array.isArray(selection)
              ? `${label}: ${selection?.join(", ")}`
              : `${label}: ${selection}`
          }
          autoClose={isMulti ? "outside" : ""}
        >
          <Dropdown.Item onClick={onChangeHandler} data-index={-1}>
            <span value="No Preference">No Preference</span>
          </Dropdown.Item>
          {listItems.map((item, index) => {
            return (
              <Dropdown.Item
                key={"item" + index}
                onClick={onChangeHandler}
                data-index={index}
              >
                {isMulti && selection.includes(item.text.toString()) ? (
                  <svg
                    className="absolute"
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
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <span style={{ width: "24px" }} />
                )}
                <div className="d-flex justify-content-between w-100">
                  <span>{item.text}</span>
                  {item.icon && (
                    <span className="dropdown-item-icon">{item.icon}</span>
                  )}
                </div>
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </div>
    </DropdownWrapper>
  );
};
