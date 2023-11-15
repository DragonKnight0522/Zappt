import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, NavDropdown } from "react-bootstrap";
import { AuthState, DataState, SidebarState } from "../context/AuthProvider";
import { SearchInput } from "./SearchInput";
import { MSearchModal } from "./MSearchModal";
import { DropdownWrapper } from "../layout/Food/styled-components";
import { HeaderWrapper } from "./styled-components";
import { listSearch } from "../utils/api";
import { googleLogout } from "@react-oauth/google";
import { isEmpty } from "../utils/util";
import InTakeModal from "./MInTakeModal";
import gaEvents from "../utils/gaEvents";

// import { Container } from './styles';

export default function MHeader() {
  const navigate = useNavigate();

  const { isSidebarOpen, setSidebarOpen } = SidebarState();
  const { setTableData } = DataState();
  const { auth, setAuth } = AuthState();

  const [formData, setFormData] = useState({});
  const [excFormData, setExcFormData] = useState({});
  const [exclusion, setExclusion] = useState(false);
  const [isShowSearchModal, setShowSearchModal] = useState(false);

  const handleShow = () => setSidebarOpen(!isSidebarOpen);
  const handleExclusionButton = () => {
    setExclusion(!exclusion);
  };

  const handleSearch = () => {
    setTableData([]);
    const abortController = new AbortController();
    listSearch(
      { criteria: formData, excCriteria: excFormData },
      abortController.signal
    )
      .then((data) => {
        setTableData(data);
        navigate("/search");
        gaEvents.eventLocationSearch();
      })
      .catch("null");
  };

  const handleSignOut = () => {
    localStorage.removeItem("auth");
    googleLogout();
    setAuth({});
    navigate("/");
  };

  const handleUserAccountClick = () => {
    navigate(`/auth/${auth.id}`);
  };

  return (
    <header>
      <HeaderWrapper>
        <div className="d-flex justify-content-between container-fluid homepage-bgimage h-100 px-sm-5 py-3">
          <img
            alt="zappt"
            onClick={handleShow}
            src={require("../images/zappt-white.png")}
            style={{
              width: "auto",
              height: "75px",
              marginRight: "25px",
              alignItems: "start",
            }}
          />
          <div className="d-none d-sm-block">
            <DropdownWrapper>
              <SearchInput
                formData={formData}
                setFormData={setFormData}
                isEdit={true}
              />
            </DropdownWrapper>
            {exclusion ? (
              <div>
                <div className="d-none d-sm-block">
                  <p className="m-0" style={{ paddingLeft: "20px" }}>
                    Exclusion Criteria
                  </p>
                  <DropdownWrapper>
                    <SearchInput
                      formData={excFormData}
                      setFormData={setExcFormData}
                      isEdit={true}
                    />
                  </DropdownWrapper>
                </div>
                <div className="w-25" />
              </div>
            ) : null}
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="d-none d-sm-block"
              onClick={handleExclusionButton}
              style={{
                width: "160px",
                height: "40px",
                margin: "9px",
                // color: "#E1E8ED",
                // backgroundColor: "#1DA1F2",
                border: "none",
              }}
            >
              Exclusion Criteria
            </Button>
            <Button
              className="mx-2 d-none d-sm-block"
              onClick={handleSearch}
              style={{
                width: "80px",
                height: "40px",
                margin: "9px",
                // color: "#E1E8ED",
                // backgroundColor: "#1DA1F2",
                border: "none",
              }}
            >
              Search
            </Button>
            <Button
              className="mx-2 d-block d-sm-none"
              data-toggle="modal"
              data-target="#updateModal"
              onClick={() => setShowSearchModal(true)}
              style={{
                width: "80px",
                height: "40px",
                margin: "9px",
                color: "#E1E8ED",
                backgroundColor: "#1DA1F2",
                border: "none",
              }}
            >
              Search
            </Button>

            <NavDropdown
              className="mx-2"
              style={{
                marginTop: "9px",
                paddingTop: "7px",
                color: "white",
              }}
              title={
                isEmpty(auth) ? "Account" : auth.firstName + " " + auth.lastName
              }
            >
              {!isEmpty(auth) ? (
                <>
                  <NavDropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleUserAccountClick}>
                    User Account
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/signIn">Sign In</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/signUp">Sign Up</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </div>
        </div>
        {isShowSearchModal ? (
          <MSearchModal
            modalId="updateModal"
            setShowSearchModal={setShowSearchModal}
            formData={formData}
            setFormData={setFormData}
            handleExclusionButton={handleExclusionButton}
            excFormData={excFormData}
            setExcFormData={setExcFormData}
            exclusion={exclusion}
            handleSearch={handleSearch}
          />
        ) : null}
        <InTakeModal show={!isEmpty(auth) && !auth?.intake} />
      </HeaderWrapper>
    </header>
  );
}
