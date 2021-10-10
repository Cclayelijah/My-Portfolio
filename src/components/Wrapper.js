import React from "react";
import styled from "styled-components";

import Panel from "./Panel";
import Content from "./Content";

const Wrapper = () => {
  return (
    <Container>
      <Panel />
      <Content />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 50px 0px 0px 50px;
  display: flex;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 0;
    padding: 20px;
  }
`;

export default Wrapper;
