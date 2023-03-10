import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import CardLinks from "./CardLinks";
import Cards from "./Cards";
import Cart from "./Cart";

function Dashboard() {
  const [cart, setCart] = useState([]);
  const getItems = (i) => {
    if (cart.length === 0) {
      // console.log(i);
      setCart([
        ...cart,
        {
          item: i,
          no: 1,
          count: 1,
        },
      ]);
    } else {
      let flag = 0;
      cart.forEach((c) => {
        if (c.item.id === i.id) {
          c.no = c.no + 1;
          flag = 1;
          return;
        }
      });
      if (flag === 0) {
        setCart([
          ...cart,
          {
            item: i,
            no: 1,
            count: 1,
          },
        ]);
      } else {
        setCart([...cart]);
      }
    }
    // console.log(cart);
  };
  const incrementCount = (id) => {
    // console.log(id);
    cart.forEach((c) => {
      if (c.item.id === id) {
        c.no = c.no + 1;
        c.count = c.count + 1;
        setCart([...cart]);
        return;
      }
    });
  };
  const decrementCount = (id) => {
    // console.log(id);
    cart.forEach((c, i) => {
      if (c.item.id === id) {
        c.no = c.no - 1;
        c.count = c.count - 1;

        if (c.no === 0) {
          cart.splice(i, 1);
        }
        setCart([...cart]);
        return;
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboardContainer>
        <FlexContainer>
          <LeftSideContainer>
            <CardLinks />
            <Cards getItems={getItems} />
          </LeftSideContainer>
          <RightSideContainer>
            <Cart
              cart={cart}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
            />
          </RightSideContainer>
        </FlexContainer>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
const DashboardContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
`;
const FlexContainer = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  @media all and (max-width: 980px) {
    flex-wrap: wrap;
  }
`;
const LeftSideContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const RightSideContainer = styled.div``;
