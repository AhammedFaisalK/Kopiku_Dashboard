import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function CardLinks() {
  const items = [
    {
      id: 0,
      imageUrl: require("../../Assets/Images/Tea-fill.svg").default,
      itemName: "Coffee",
    },
    {
      id: 1,
      imageUrl: require("../../Assets/Images/Tea-fill.svg").default,
      itemName: "Tea",
    },
    {
      id: 2,
      imageUrl: require("../../Assets/Images/Cake.svg").default,
      itemName: "Cakes",
    },
    {
      id: 3,
      imageUrl: require("../../Assets/Images/Bottle.svg").default,
      itemName: "Bundles",
    },
    {
      id: 4,
      imageUrl: require("../../Assets/Images/Snack.svg").default,
      itemName: "Snack",
    },
  ];
  return (
    <CardLinkContainer>
      <CardLinksList>
        {items.map((item) => {
          return (
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              key={item.id}
            >
              <ItemLink key={item.id}>
                <ImageList>
                  <ListIcon src={item.imageUrl} alt={item.itemName} />
                </ImageList>
                <ItemName>{item.itemName}</ItemName>
              </ItemLink>
            </NavLink>
          );
        })}
      </CardLinksList>
    </CardLinkContainer>
  );
}

export default CardLinks;
const CardLinkContainer = styled.div``;
const CardLinksList = styled.ul`
  display: flex;
  @media all and (max-width: 640px) {
    margin-left: -60px;
  }
`;
const ItemLink = styled.li`
  display: flex;
  margin-right: 15px;
  align-items: center;
  background: #eeeceb;
  padding: 11px 21px;
  border-radius: 45px;
  filter: grayscale();
  &:hover {
    filter: none;
    background: #ff7c00;
    color: white;
  }
  &:last-child {
    /* margin-right: 0; */
  }
  cursor: pointer;
  @media all and (max-width: 1380px) {
    padding: 11px 4px;
  }
  @media all and (max-width: 1280px) {
    padding: 11px 13px;
  }
`;
const ImageList = styled.div`
  background: #d9d9d9;
  padding: 10px;
  border-radius: 50%;
  @media all and (max-width: 1280px) {
    display: none;
  }
`;
const ListIcon = styled.img``;
const ItemName = styled.h2`
  font-size: 15px;
  font-weight: 500;
  margin-left: 13px;
  color: #a69494;
  &:hover {
    color: #ffff;
  }
  @media all and (max-width: 1280px) {
    margin-left: 0;
    font-size: 12px;
  }
  @media all and (max-width: 480px) {
    width: 20%;
  }
`;
