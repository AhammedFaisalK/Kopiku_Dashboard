import React from "react";
import styled from "styled-components";

function CardLinks() {
  return (
    <CardLinkContainer>
      <CardLinksList>
        <ItemLink>
          <ImageList>
            <ListIcon
              src={require("../../Assets/Images/Tea-fill.svg").default}
              alt="Coffee Icon"
            />
          </ImageList>
          <ItemName>Coffee</ItemName>
        </ItemLink>
        <ItemLink>
          <ImageList>
            <ListIcon
              src={require("../../Assets/Images/Tea-fill.svg").default}
              alt="Tea Icon"
            />
          </ImageList>
          <ItemName>Tea</ItemName>
        </ItemLink>
        <ItemLink>
          <ImageList>
            <ListIcon
              src={require("../../Assets/Images/Cake.svg").default}
              alt="Cakes Icon"
            />
          </ImageList>
          <ItemName>Cakes</ItemName>
        </ItemLink>
        <ItemLink>
          <ImageList>
            <ListIcon
              src={require("../../Assets/Images/Bottle.svg").default}
              alt="Bundles Icon"
            />
          </ImageList>
          <ItemName>Bundles</ItemName>
        </ItemLink>
        <ItemLink>
          <ImageList>
            <ListIcon
              src={require("../../Assets/Images/Snack.svg").default}
              alt="Snack Icon"
            />
          </ImageList>
          <ItemName>Snack</ItemName>
        </ItemLink>
      </CardLinksList>
    </CardLinkContainer>
  );
}

export default CardLinks;
const CardLinkContainer = styled.div``;
const CardLinksList = styled.ul`
  display: flex;
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
    margin-right: 0;
  }
  cursor: pointer;
`;
const ImageList = styled.div`
  background: #d9d9d9;
  padding: 10px;
  border-radius: 50%;
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
`;
