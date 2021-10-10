import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Content = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <Route render={() => <Redirect to={"/"} />} />
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 30px;
  display: flex;
  flex: 1;
  h1 {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export default Content;
