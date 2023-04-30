import React, { useState } from "react";
import styled from "styled-components";

function Cards({ getItems }) {
  const [show, setShow] = useState(null);
  const cardDetails = [
    {
      id: 1,
      categoryName: "Indonesian Beans",
      categoryDes:
        " Selected Coffee Beans with the best Quality from indonesian",
      price: "35.00",
      imageUrl: require("../../Assets/Images/IndonesianBeans.jpg"),
    },
    {
      id: 2,
      categoryName: "Costa Rica Beans",
      categoryDes:
        " Selected Coffee Beans with the best Quality from costa rica",
      price: "35.00",
      imageUrl: require("../../Assets/Images/CostaricaBeans.jpg"),
    },
    {
      id: 3,
      categoryName: "Ethopian Beans",
      categoryDes: " Selected Coffee Beans with the best Quality from ethopia",
      price: "35.00",
      imageUrl: require("../../Assets/Images/Ethopian Beans.jpg"),
    },
    {
      id: 4,
      categoryName: "Peru Beans",
      categoryDes: " Selected Coffee Beans with the best Quality from Peru",
      price: "35.00",
      imageUrl: require("../../Assets/Images/PeruBeans.jpg"),
    },
    {
      id: 5,
      categoryName: "Guatemala Beans",
      categoryDes:
        " Selected Coffee Beans with the best Quality from Guetamala",
      price: "35.00",
      imageUrl: require("../../Assets/Images/GuetamalaBeans.jpg"),
    },
  ];

  return (
    <CardsContainer>
      <SubHeading>Beans menu</SubHeading>
      <Categories>
        {cardDetails.map((category) => {
          return (
            <Category key={category.id}>
              <CategoryTopSection>
                <CategoryImage>
                  <ImageFrame
                    src={category.imageUrl}
                    alt={category.categoryName}
                  />
                </CategoryImage>
                <CategoryDetails>
                  <CategoryName> {category.categoryName}</CategoryName>
                  <CategoryDescription>
                    {category.categoryDes}
                  </CategoryDescription>
                  <Price>${category.price}</Price>
                </CategoryDetails>
              </CategoryTopSection>
              {show === category.id ? (
                <>
                  {" "}
                  <CategoryMiddleSection>
                    <DiscountPack>
                      <DiscountHeading>Roasting Type</DiscountHeading>
                      <DiscountList>
                        <Percentage>25%</Percentage>
                        <Percentage>50%</Percentage>
                        <Percentage>75%</Percentage>
                        <Percentage>100%</Percentage>
                      </DiscountList>
                    </DiscountPack>
                    <VolumePack>
                      <VolumePackHeading>Volume Pack</VolumePackHeading>
                      <VolumePackList>
                        <Grams>250g</Grams>
                        <Grams>500g</Grams>
                        <Grams>750g</Grams>
                      </VolumePackList>
                    </VolumePack>
                  </CategoryMiddleSection>
                  <CategoryBottomSection>
                    <Button onClick={() => getItems(category)}>
                      Add to bill
                    </Button>
                  </CategoryBottomSection>
                </>
              ) : null}
              {show === category.id ? (
                <ViewButton onClick={(e) => (e ? setShow(null) : null)}>
                  View less Details
                </ViewButton>
              ) : (
                <ViewButton onClick={(e) => (e ? setShow(category.id) : null)}>
                  View details
                </ViewButton>
              )}
            </Category>
          );
        })}
      </Categories>
    </CardsContainer>
  );
}

export default Cards;
const CardsContainer = styled.div`
  padding-top: 30px;
`;
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Category = styled.div`
  background-color: #eeeceb;
  border-radius: 20px;
  padding: 30px 0;
  width: 48%;
  margin-right: 11px;
  margin-bottom: 30px;
  height: min-content;
  @media all and (max-width: 1280px) {
    width: 100%;
  }
`;
const SubHeading = styled.h2`
  font-weight: 600;
  margin-bottom: 22px;
`;
const CategoryImage = styled.div`
  width: 42%;
  margin: 0 29px;
  background-color: #eeeceb;
`;
const ImageFrame = styled.img`
  background: #f0ebe8;
  width: 100%;
  display: block;
  border-radius: 20px;
`;
const CategoryDetails = styled.div`
  width: 71%;
`;
const CategoryName = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;
const CategoryDescription = styled.p`
  font-size: 13px;
  width: 97%;
  line-height: 25px;
  margin-bottom: 10px;
  color: #c2b8b7;
  font-weight: 600;
`;
const Price = styled.h2`
  font-weight: 600;
  /* margin-bottom: 10px; */
  font-size: 18px;
`;
const CategoryTopSection = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryMiddleSection = styled.div`
  margin: 25px 0px;
`;
const Percentage = styled.div`
  margin-right: 20px;
  background-color: #d5d2d1;
  padding: 13px 20px;
  border-radius: 35px;
  color: #f6f5f4;
  &:hover {
    background-color: #21282c;
    color: #f6f5f4;
  }
  &:last-child {
    margin-right: 0;
  }
  &:nth-child(2) {
    background-color: #21282c;
    color: #f6f5f4;
  }
  @media all and (max-width: 1440px) {
    padding: 13px 14px;
  }
  @media all and (max-width: 1380px) {
    padding: 13px 9px;
  }
  @media all and (max-width: 1280px) {
    padding: 13px 18px;
  }
  @media all and (max-width: 1080px) {
    padding: 13px 15px;
  }
  @media all and (max-width: 768px) {
    padding: 13px 11px;
  }
  @media all and (max-width: 640px) {
    padding: 13px 4.5px;
  }
`;
const DiscountHeading = styled.h6`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
`;
const DiscountPack = styled.div`
  width: 93%;
  margin: 0 auto;
`;
const DiscountList = styled.div`
  display: flex;
`;
const VolumePack = styled.div`
  width: 93%;
  margin: 25px auto 0px;
`;
const VolumePackHeading = styled.h6`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
`;
const CategoryBottomSection = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Grams = styled.div`
  margin-right: 40px;
  background-color: #d5d2d1;
  padding: 11px 25px;
  border-radius: 35px;
  color: #f6f5f4;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #21282c;
    color: #f6f5f4;
  }
  &:nth-child(2) {
    background-color: #21282c;
    color: #f6f5f4;
  }
  @media all and (max-width: 1440px) {
    padding: 11px 17px;
  }
  @media all and (max-width: 1380px) {
    margin-right: 25px;
  }
  @media all and (max-width: 1280px) {
    padding: 11px 28px;
  }
  @media all and (max-width: 1080px) {
    padding: 11px 25px;
  }
  @media all and (max-width: 768px) {
    padding: 11px 19px;
  }
  @media all and (max-width: 640px) {
    padding: 11px 8px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  background-color: #ff7b00;
  padding: 17px 10px;
  border-radius: 35px;
  font-size: 20px;
  color: #fff;
  width: 100%;
  @media all and (max-width: 1280px) {
    width: 94%;
    margin: 0 auto;
  }
`;
const VolumePackList = styled.div`
  display: flex;
`;
const ViewButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 30px auto 0px;
  background-color: #d5d2d1;
  padding: 19px 110px;
  border-radius: 35px;
  font-size: 20px;
  background-color: #d5d2d1;
  color: #000;
  &:hover {
    background-color: #ff7b00;
    color: #fff;
  }
  @media all and (max-width: 1440px) {
    padding: 19px 22px;
  }
  @media all and (max-width: 1280px) {
    padding: 19px 56px;
  }
  @media all and (max-width: 640px) {
    padding: 19px 26px;
  }
`;
