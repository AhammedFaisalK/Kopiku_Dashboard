import React from "react";
import styled from "styled-components";

function Cart() {
  return (
    <CartContainer>
      <BillDetails>
        <BillHead></BillHead>
        <BillNo></BillNo>
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
            <CartImage />
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
        <HeadingPyment>Payment</HeadingPyment>
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
const CartContainer = styled.div``;
const BillDetails = styled.div``;
const BillHead = styled.h1``;
const BillNo = styled.h1``;
const Method = styled.ul``;
const ItemRecieveMethod = styled.div``;
const CartSection = styled.div``;
const PriceSection = styled.div``;
const CartImageContainer = styled.div``;
const CartImage = styled.img``;
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
const PaymentMode = styled.ul``;
const Mode = styled.li``;
const CheckOut = styled.button``;
