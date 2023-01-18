import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <MainContainer>
      <WebsiteNameContainer>
        <TopName>Welcome to Kopiku Dashboard</TopName>
        <BottomName>Let's choose menu</BottomName>
      </WebsiteNameContainer>
      <RightContainer>
        <SearchMenuContainer>
          <SearchLogo>
            <SearchImg
              src={require("../../Assets/Images/Search.svg").default}
            />
            <SearchText type="search" placeholder="Search menu..." />
          </SearchLogo>
        </SearchMenuContainer>
        <Bell>
          <BellImg
            src={require("../../Assets/Images/Notification.svg").default}
          />
        </Bell>
        <ProfileContainer>
          <Profile>
            <ProfileImg />
          </Profile>
          <ProfileNameContainer>
            <Position>Admin</Position>
            <ProfileName>Alex Jorandd</ProfileName>
          </ProfileNameContainer>
        </ProfileContainer>
        <AddMenuContainer>
          <Add>
            <AddImage />
          </Add>
          <AddMenu>Add new menu</AddMenu>
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
  height: 75px;
`;
const WebsiteNameContainer = styled.div`
  width: 40%;
`;
const TopName = styled.h6``;
const BottomName = styled.h4``;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchMenuContainer = styled.div``;
const SearchLogo = styled.div``;
const SearchImg = styled.img``;
const SearchText = styled.input``;
const Bell = styled.div``;
const BellImg = styled.img``;
const ProfileContainer = styled.div``;
const Profile = styled.div``;
const ProfileImg = styled.img``;
const ProfileNameContainer = styled.div``;
const Position = styled.h5``;
const ProfileName = styled.h6``;
const AddMenuContainer = styled.div``;
const Add = styled.div``;
const AddImage = styled.img``;
const AddMenu = styled.h3``;
