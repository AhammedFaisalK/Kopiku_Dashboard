import React from "react";
import styled from "styled-components";

function SideBar() {
  return (
    <LeftSideBar>
      <MiddlePortion>
        <MenuItem>
          <IconContainer>
            <Icon
              src={require("../../Assets/Images/Menu.svg").default}
              alt="Dashboard Icon"
            />
          </IconContainer>
        </MenuItem>
        <MenuItem>
          <IconContainer>
            <Icon
              src={require("../../Assets/Images/tea.svg").default}
              alt="tea Icon"
            />
          </IconContainer>
        </MenuItem>

        <MenuItem>
          <IconContainer>
            <Icon
              src={require("../../Assets/Images/wallet.svg").default}
              alt="wallet Icon"
            />
          </IconContainer>
        </MenuItem>
        <MenuItem>
          <IconContainer>
            <Icon
              src={require("../../Assets/Images/Graph.svg").default}
              alt="Graph Icon"
            />
          </IconContainer>
        </MenuItem>
        <MenuItem>
          <IconContainer>
            <Icon
              src={require("../../Assets/Images/Settings.svg").default}
              alt="Settings Icon"
            />
          </IconContainer>
        </MenuItem>
      </MiddlePortion>
    </LeftSideBar>
  );
}

export default SideBar;
const LeftSideBar = styled.aside`
  width: 111px;
  background: #fff;
  height: 100vh;
`;
const MiddlePortion = styled.ul``;
const MenuItem = styled.li`
  width: 40px;
  margin: 0 auto 35px;
`;
const IconContainer = styled.span`
  width: 30px;
  display: block;
`;
const Icon = styled.img`
  width: 100%;
  display: block;
`;
