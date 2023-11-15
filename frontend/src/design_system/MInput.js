import React from "react";
import { v4 as uuidv4 } from "uuid";

export const MInput = ({
  attribute,
  formData,
  setFormData,
  editData,
  isEdit,
  className,
  formClassName,
  ...props
}) => {
  const setFormDataValue = (value) => {
    if (isEdit) {
      setFormData({
        ...formData,
        [attribute]: value,
      });
    } else {
      const myUUID = uuidv4();
      setFormData({
        ...formData,
        id: myUUID,
        [attribute]: value,
      });
    }
  };

  const onChangeHandler = (event) => {
    if (props.type === "file") {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          const data = e.target.result;
          setFormDataValue(data);
        };
      }
      return;
    }
    setFormDataValue(event.target.value);
  };

  return (
    <div className={`form-outline ${formClassName}`}>
      <input
        type="text"
        placeholder={editData}
        id="form12"
        className={`form-control ${className}`}
        onChange={onChangeHandler}
        {...props}
      />
    </div>
  );
};
