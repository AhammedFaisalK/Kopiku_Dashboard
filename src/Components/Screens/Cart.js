import React from "react";
import styled from "styled-components";

function Cart() {
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
      <CartSection>
        <PriceSection>
          <CartImageContainer>
            <CartImage src={require("../../Assets/Images/PeruBeans.jpg")} />
          </CartImageContainer>
          <AddCart>
            <CartItemHeading>Indonesian Beans</CartItemHeading>
            <CartItemQty>Beans= 75%+250g</CartItemQty>
            <CartItemPriceHeading>$60.00</CartItemPriceHeading>
          </AddCart>
        </PriceSection>
        <ItemNeeds>
          <IncrementItem>
            <AddImage />
          </IncrementItem>
          <Count></Count>
          <DecrementItem>
            <DecrementImage />
          </DecrementItem>
        </ItemNeeds>
      </CartSection>
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
  margin: 0 auto 0 70px;
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
const ItemRecieveMethod = styled.div``;
const CartSection = styled.div``;
const PriceSection = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;
const CartImageContainer = styled.div`
  width: 42%;
`;
const CartImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
`;
const AddCart = styled.div``;
const CartItemHeading = styled.h2``;
const CartItemQty = styled.h3``;
const CartItemPriceHeading = styled.h4``;
const ItemNeeds = styled.div``;
const IncrementItem = styled.div``;
const DecrementItem = styled.div``;
const AddImage = styled.img``;
const DecrementImage = styled.img``;
const Count = styled.h4``;
const ItemsSection = styled.div``;
const ItemCount = styled.ul``;
const Item1 = styled.li``;
const PriceCount = styled.ul``;
const Price1 = styled.li``;
const TotalPriceContainer = styled.div``;
const TotalAmount = styled.h5``;
const Pay = styled.h5``;
const PaymentSection = styled.div``;
const HeadingPayment = styled.h6``;
const PaymentMode = styled.ul``;
const Mode = styled.li``;
const CheckOut = styled.button``;
