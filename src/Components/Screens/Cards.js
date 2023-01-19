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
                Selected Coffee Beans with the best Quality form indonesian
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
            <Button>Add to bill</Button>
          </CategoryBottomSection>
        </Category>
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
                Selected Coffee Beans with the best Quality form indonesian
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
            <Button>Add to bill</Button>
          </CategoryBottomSection>
        </Category>
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
                Selected Coffee Beans with the best Quality form indonesian
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
            <Button>Add to bill</Button>
          </CategoryBottomSection>
        </Category>
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
                Selected Coffee Beans with the best Quality form indonesian
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
            <Button>Add to bill</Button>
          </CategoryBottomSection>
        </Category>
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
  padding: 13px 22px;
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
`;
const Button = styled.button`
  background-color: #ff7b00;
  padding: 17px 10px;
  border-radius: 35px;
  font-size: 20px;
  color: #fff;
  width: 100%;
`;
const VolumePackList = styled.div`
  display: flex;
`;
