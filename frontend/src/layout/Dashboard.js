import React from "react";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  color: white;
  margin: 7rem;
  text-align: center;
  text-shadow: #14171a 3px 3px;

  @media only screen and (max-width: 480px) {
    margin: 2rem;
    font-size: 3rem;
  }
`;

export const Dashboard = () => {
  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <DashboardWrapper>
        Spend Less Time Looking and More Time Doing
      </DashboardWrapper>
    </div>
  );
};
