import React from "react";
import styled from "styled-components";

function Cards() {
  return (
    <CardsContainer>
      <SubHeading>Beans menu</SubHeading>
      <Categories>
        <Category>
          <CategoryTopSection>
            <CategoryImage>
              <ImageFrame
                src={require("../../Assets/Images/IndonesianBeans.jpg")}
                alt="Dashboard Icon"
              />
            </CategoryImage>
            <CategoryDetails>
              <CategoryName> Indonesian Beans</CategoryName>
              <CategoryDescription>
                Selected Coffee Beans with best Quality form indonesian
              </CategoryDescription>
              <Price>$ 35. 00</Price>
            </CategoryDetails>
          </CategoryTopSection>
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
            <Button>Add to Bill</Button>
          </CategoryBottomSection>
        </Category>
      </Categories>
    </CardsContainer>
  );
}

export default Cards;
const CardsContainer = styled.div``;
const Categories = styled.div``;
const Category = styled.div`
  background-color: #eeeceb;
  border-radius: 20px;
  padding: 30px 0;
`;
const SubHeading = styled.h2``;
const CategoryImage = styled.div`
  width: 25%;
  margin: 0 auto;
`;
const ImageFrame = styled.img`
  background: #f0ebe8;
  width: 100%;
  display: block;
`;
const CategoryDetails = styled.div``;
const CategoryName = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;
const CategoryDescription = styled.p`
  font-size: 14px;
  width: 90%;
  line-height: 25px;
  margin-bottom: 10px;
`;
const Price = styled.h2`
  font-weight: 600;
  margin-bottom: 10px;
`;
const CategoryTopSection = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryMiddleSection = styled.div``;
const Percentage = styled.div`
  margin-right: 20px;
  background-color: #d5d2d1;
  padding: 15px 17px;
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
`;
const DiscountHeading = styled.h6``;
const DiscountPack = styled.div``;
const DiscountList = styled.div`
  display: flex;
`;
const VolumePack = styled.div``;
const VolumePackHeading = styled.h6``;
const CategoryBottomSection = styled.div``;
const Grams = styled.div``;
const Button = styled.button``;
const VolumePackList = styled.div`
  display: flex;
`;
