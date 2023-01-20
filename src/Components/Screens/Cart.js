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
      </CartSection>
    </CartContainer>
  );
}

export default Cart;
const CartContainer = styled.div``;
