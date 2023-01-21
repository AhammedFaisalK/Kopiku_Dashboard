import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <MainContainer>
      <LeftConatiner>
        <Logo>
          <Link to="/">
            <LogoImage
              src={require("../../Assets/Images/Logo.svg").default}
              alt="Logo"
            />
          </Link>
        </Logo>
        <WebsiteNameContainer>
          <TopName>Welcome to Kopiku Dashboard</TopName>
          <BottomName>Let's choose menu</BottomName>
        </WebsiteNameContainer>
      </LeftConatiner>

      <MiddleContainer>
        <SearchLogo>
          <SearchText type="search" placeholder="Search menu..." />
          <SearchImg
            src={require("../../Assets/Images/Search.svg").default}
            alt="Search Icon"
          />
        </SearchLogo>
      </MiddleContainer>
      <RightContainer>
        <Bell>
          <BellImg
            src={require("../../Assets/Images/Notification.svg").default}
            alt="Bell Icon"
          />
        </Bell>
        <ProfileContainer>
          <Profile>
            <ProfileImg
              src={require("../../Assets/Images/User.jpg")}
              alt="User Icon"
            />
          </Profile>
          <ProfileNameContainer>
            <Position>Admin</Position>
            <ProfileName>Alex Jorand</ProfileName>
          </ProfileNameContainer>
        </ProfileContainer>
        <AddMenuContainer>
          <Add>
            <AddImage
              src={require("../../Assets/Images/Add.svg").default}
              alt="Add Icon"
            />
          </Add>
          <AddMenu placeholder="Add new menu" />
        </AddMenuContainer>
      </RightContainer>
    </MainContainer>
  );
}

export default Header;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e2e1;
  width: 95%;
  margin: 0 auto;
  height: 140px;
`;
const LeftConatiner = styled.div`
  display: flex;

  align-items: center;
  width: 30%;
`;
const Logo = styled.div`
  width: 40px;
  margin-right: 80px;
  @media all and (max-width: 1280px) {
    margin-right: 24px;
  }
`;
const LogoImage = styled.img`
  display: block;
  width: 100%;
`;
const WebsiteNameContainer = styled.div``;
const TopName = styled.h2`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`;
const BottomName = styled.h1`
  font-size: 24px;
  font-weight: 600;
  width: 231px;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 18px 17px;
  border-radius: 35px;
  width: 28%;
`;
const SearchLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const SearchImg = styled.img`
  width: 5.5%;
`;
const SearchText = styled.input`
  border: none;
  color: #dbd6d7;
  opacity: 0.5;
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
const Bell = styled.div`
  width: 16%;
  margin-right: 21px;
  @media all and (max-width: 1380px) {
    width: 22%;
  }
`;
const BellImg = styled.img`
  display: block;
  width: 100%;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Profile = styled.div`
  width: 25%;
  border-radius: 50%;
  overflow: hidden;
  @media all and (max-width: 1440px) {
    width: 28%;
  }
  @media all and (max-width: 1380px) {
    width: 25%;
  }
`;
const ProfileImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;
const ProfileNameContainer = styled.div`
  margin-left: 15px;
  @media all and (max-width: 1380px) {
    margin-right: 10px;
  }
`;
const Position = styled.h5`
  color: #bdb0b0;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 7px;
`;
const ProfileName = styled.h6`
  font-weight: 600;
  font-size: 16px;
  @media all and (max-width: 1380px) {
    font-size: 13px;
  }
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
`;
const AddMenuContainer = styled.div`
  display: flex;
  align-items: center;
  background: #eaeaea;
  padding: 20px 10px;
  width: 100%;
  border-radius: 35px;
  @media all and (max-width: 1440px) {
    width: 32rem;
  }
  @media all and (max-width: 1380px) {
    width: 38rem;
  }
  @media all and (max-width: 1280px) {
    display: none;
  }
`;
const Add = styled.div`
  width: 25px;
  margin-right: 20px;
`;
const AddImage = styled.img`
  display: block;
  width: 100%;
`;
const AddMenu = styled.input`
  display: block;
  width: 80%;
  font-size: 16px;
  font-weight: 600;
  border: none;
  ::placeholder {
    color: black;
    opacity: 1;
  }
`;
