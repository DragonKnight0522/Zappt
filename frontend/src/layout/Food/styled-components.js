import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;

  .form-control {
    margin-top: 5px;
    height: calc(1.5em + 1rem + 2px) !important;
  }

  .dropdown {
    margin: 5px 0;
  }

  .input {
    margin: 10px;
    padding: 10px;
  }

  p {
    margin: 0;
  }
`;

export const TopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: auto;
    max-width: 100%;
  }
  .button-class {
    display: flex;
    flex-direction: row;
  }
`;

export const DetailBodyWrapper = styled.div`
  padding: 20px;
  background-color: rgba(225, 232, 237, 0.9);
  border-radius: 25px;
  img {
    height: auto;
    max-width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 480px) {
    flex-direction: column;
  }
`;
