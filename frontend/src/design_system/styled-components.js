import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

export const SearchFieldsWrapper = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  margin: 5px !important;
  align-items: center !important;
  .dropdown {
    margin: 5px !important;
  }
`;

export const DropdownWrapper = styled.div`
  .dropdownButton {
    .btn-primary {
      background-color: #e1e8ed !important;
      color: #14171a !important;
      border-color: #e1e8ed !important;
      box-shadow: 0 5px 10px #657786 !important;

      max-width: 100%;
      overflow: auto;
    }

    ::-webkit-scrollbar {
      background-color: #f5f5f5;
      width: 2px;
    }

    /* Set the color of the scrollbar thumb */
    ::-webkit-scrollbar-thumb {
      background-color: #1da1f2;
    }

    /* Set the color of the scrollbar track */
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }

    .dropdown-menu {
      box-shadow: 0 5px 10px #657786 !important;
      max-height: 40vh;
      overflow: auto;

      .dropdown-item:active {
        background-color: #14171a !important;
      }

      .dropdown-item {
        display: flex;
        align-items: center;

        .dropdown-item-icon {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dropdown-item-icon svg {
          width: 20px;
          height: 20px;
          margin-left: 10px;
          fill: #1da1f2;
        }
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  background-color: #1da1f2;
`;

export const TableWrapper = styled.div`
  background-color: #aab8c2;
  opacity: 0.9;
  overflow: auto;
`;
