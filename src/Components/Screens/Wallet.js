import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
function Wallet() {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
      </Helmet>
      <Container>
        <ComingSoonImage
          src={require("../../Assets/Images/coming.png")}
          alt="Coming"
        />
      </Container>
    </>
  );
}

export default Wallet;
const Container = styled.section`
  margin: auto;
  width: 30%;
  background-color: aliceblue;
`;

const ComingSoonImage = styled.img`
  width: 100%;
  display: block;
`;
