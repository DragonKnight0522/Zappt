import React from "react";
import { MInput } from "../../design_system/MInput";
import { DropdownWrapper, Wrapper } from "./styled-components";
import { SearchInput } from "../../design_system/SearchInput";

export const AdminInput = ({ formData, setFormData, tableData, isEdit }) => {
  return (
    <>
      <Wrapper>
        <div>
          <p>Name</p>
          <MInput
            attribute="name"
            editData={tableData?.name || null}
            formData={formData}
            setFormData={setFormData}
            isEdit={isEdit}
          />
        </div>
        <div>
          <p>Address</p>
          <MInput
            attribute="address"
            formData={formData}
            editData={tableData?.address || null}
            setFormData={setFormData}
            isEdit={isEdit}
          />
        </div>
      </Wrapper>
      <DropdownWrapper>
        <SearchInput
          formData={formData}
          setFormData={setFormData}
          tableData={tableData}
          isEdit={isEdit}
        />
      </DropdownWrapper>
    </>
  );
};
