import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Projects = () => {
  return (
    <Container>
      <h1>My Projects</h1>
      <div className="wrapper">
        <Card
          title="HIPOS Technology"
          url={"https://hipostech.com/"}
          description={
            "A manufacturing & sourcing company in Shenzhen, China that does business internationally."
          }
          imageURL="/images/projects/hipos.jpeg"
        />
        <Card
          title="Vote Kendalyn"
          url=""
          description="A WordPress site I built for the Mayor of Bountiful when she was campaigning for the election."
          imageURL="/images/projects/kendalyn.jpg"
        />
        <Card
          title="True Review Guru"
          url="https://truereviewguru.com/"
          description="A WordPress website where anyone can sign up and learn to be a blogger for free! An SEO project."
          imageURL="/images/projects/trg.jpg"
        />
        <Card
          title="TEDx Bountiful"
          url="https://tedxbountiful.com/"
          description="A WordPress site that I built for my client who was responsible for organizing TEDx events in Bountiful."
          imageURL="/images/projects/tedx.jpg"
        />
        <Card
          title="LinkedIn Clone"
          url=""
          description="A LinkedIn Clone I built with React and uses Firebase for Google Authentication and DB. Coming Soon!"
          imageURL="/images/projects/linkedin.jpg"
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  h1 {
    max-width: 100%;
  }
  a {
    color: #566573;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }
  ${Card}:hover {
  }
`;

export default Projects;
