import React, { useState } from "react";
import styled from "styled-components";

function Cart(props) {
  const { cart } = props;

  // console.log(cart);

  const [count, setCount] = useState(1);
  return (
    <CartContainer>
      <BillDetails>
        <BillHead>Bills</BillHead>
        <BillNo>Order #3243</BillNo>
      </BillDetails>
      <ItemRecieveMethod>
        <Method>
          <Item>Dine in</Item>
          <Item>Take Away</Item>
          <Item>Delivery</Item>
        </Method>
      </ItemRecieveMethod>
      {cart.map((element) => {
        console.log(element);

        return (
          <CartSection>
            <PriceSection>
              <CartImageContainer>
                <CartImage src={element.item.imageUrl} />
              </CartImageContainer>
              <AddCart>
                <CartItemHeading>{element.item.categoryName}</CartItemHeading>
                <CartItemQty>Beans= 75%+250g</CartItemQty>
                <CartItemPriceHeading>$60.00</CartItemPriceHeading>
              </AddCart>
            </PriceSection>
            <ItemNeeds>
              <DecrementItem
                onClick={() =>
                  setCount((prevState) => (prevState === 1 ? 1 : prevState - 1))
                }
              >
                <DecrementImage
                  src={require("../../Assets/Images/Minus.svg").default}
                />
              </DecrementItem>
              <Count>{count}</Count>
              <IncrementItem
                onClick={() => setCount((prevState) => prevState + 1)}
              >
                <AddImage
                  src={require("../../Assets/Images/Plus.svg").default}
                />
              </IncrementItem>
            </ItemNeeds>
          </CartSection>
        );
      })}
      <ItemsSection>
        <ItemCount>
          <Item1>Items</Item1>
          <Item1>Discount</Item1>
        </ItemCount>
        <PriceCount>
          <Price1>$ 102.50</Price1>
          <Price1>-$ 3.00</Price1>
        </PriceCount>
      </ItemsSection>
      <TotalPriceContainer>
        <TotalAmount>Total</TotalAmount>
        <Pay>$ 99.50</Pay>
      </TotalPriceContainer>
      <PaymentSection>
        <HeadingPayment>Payment</HeadingPayment>
        <PaymentMode>
          <Mode>Cash</Mode>
          <Mode>Debit</Mode>
          <Mode>E-wallet</Mode>
        </PaymentMode>
      </PaymentSection>
      <CheckOut>Check Out</CheckOut>
    </CartContainer>
  );
}

export default Cart;
const CartContainer = styled.div`
  width: 90%;
  width: 75%;
  margin: 0 0 0 94px;
  background-color: #eeeceb;
  border-radius: 20px;
  padding: 40px 30px 65px 30px;
`;
const BillDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BillHead = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const BillNo = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const Method = styled.ul`
  display: flex;
`;
const Item = styled.li`
  background-color: #d5d2d1;
  padding: 15px 20px;
  margin-right: 20px;
  border-radius: 35px;
  color: #000;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #21282c;
    color: #f6f5f4;
  }
  &:nth-child(3) {
    background-color: #21282c;
    color: #f6f5f4;
  }
`;
const ItemRecieveMethod = styled.div`
  margin-top: 40px;
  width: 383px;
`;
const CartSection = styled.div`
  margin-top: 40px;
  border-bottom: 1px solid #ded8d7;
  padding-bottom: 20px;
`;
const PriceSection = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;
const CartImageContainer = styled.div`
  width: 50%;
`;
const CartImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
`;
const AddCart = styled.div``;
const CartItemHeading = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
`;
const CartItemQty = styled.h3`
  font-size: 13px;
  color: #8d8785;
  margin-bottom: 20px;
`;
const CartItemPriceHeading = styled.h4`
  font-weight: 600;
`;
const ItemNeeds = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;
const IncrementItem = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #cec5c4;
  padding: 3px 7px;
  border-radius: 50%;
  cursor: pointer;
`;
const DecrementItem = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #cec5c4;
  padding: 15px 7px;
  border-radius: 50%;
  cursor: pointer;
`;
const AddImage = styled.img`
  width: 100%;
  display: block;
`;
const DecrementImage = styled.img`
  width: 100%;
  display: block;
`;
const Count = styled.h4`
  font-weight: 600;
`;
const ItemsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const ItemCount = styled.ul``;
const Item1 = styled.li`
  margin-bottom: 10px;
  color: #8d8785;
  font-size: 14px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
const PriceCount = styled.ul``;
const Price1 = styled.li`
  color: #13ee5f;
  margin-bottom: 10px;
  font-size: 16px;
  &:nth-child(2) {
    color: red;
  }
`;
const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const TotalAmount = styled.h5`
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;
const Pay = styled.h5`
  font-size: 16px;
  color: #13ee5f;
  font-weight: 500;
`;
const PaymentSection = styled.div`
  margin-top: 80px;
`;
const HeadingPayment = styled.h6`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const PaymentMode = styled.ul`
  display: flex;
  margin-bottom: 40px;
`;
const Mode = styled.li`
  margin-right: 40px;
  background-color: #d5d2d1;
  padding: 15px 23px;
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
const CheckOut = styled.button`
  display: block;
  width: 95%;
  margin: 0 auto;
  background-color: #ff7b00;
  padding: 21px 139px;
  border-radius: 35px;
  font-size: 16px;
  color: #fff;
`;
