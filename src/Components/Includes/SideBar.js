import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function SideBar() {
  return (
    <LeftSideBar>
      <MiddlePortion>
        <MenuItem>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconContainer>
              <Icon
                src={require("../../Assets/Images/Menu.svg").default}
                alt="Dashboard Icon"
              />
            </IconContainer>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/nothing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconContainer>
              <Icon
                src={require("../../Assets/Images/tea.svg").default}
                alt="tea Icon"
              />
            </IconContainer>
          </NavLink>
        </MenuItem>

        <MenuItem>
          <NavLink
            to="/wallet"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconContainer>
              <Icon
                src={require("../../Assets/Images/wallet.svg").default}
                alt="wallet Icon"
              />
            </IconContainer>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/graph"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconContainer>
              <Icon
                src={require("../../Assets/Images/Graph.svg").default}
                alt="Graph Icon"
              />
            </IconContainer>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconContainer>
              <Icon
                src={require("../../Assets/Images/Settings.svg").default}
                alt="Settings Icon"
              />
            </IconContainer>
          </NavLink>
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
const MiddlePortion = styled.ul`
  padding-top: 30px;
  @media all and (max-width: 1440px) {
    margin-left: 20px;
  }
`;
const MenuItem = styled.li`
  width: 40px;
  margin: 0 auto 35px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const IconContainer = styled.span`
  width: 30px;
  display: block;
`;
const Icon = styled.img`
  width: 100%;
  display: block;
  filter: grayscale();
`;
