import React from "react";
import styled from "styled-components";
import CardLinks from "./CardLinks";
import Cards from "./Cards";

function Dashboard() {
  return (
    <DashboardContainer>
      <FlexContainer>
        <LeftSideContainer>
          <CardLinks />
          <Cards />
        </LeftSideContainer>
        <RightSideContainer></RightSideContainer>
      </FlexContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
const DashboardContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const LeftSideContainer = styled.div`
  width: 60%;
`;
const RightSideContainer = styled.div``;
