import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Projects = () => {
  return (
    <Container>
      <h1>My Projects</h1>
      <div className="wrapper">
        <Card
          title="OctaChop"
          url="https://octachop.com/"
          description="An online rhythm game built with Next.js and P5.js. On track to finishing the MVP by the start of 2024."
          imageURL="/images/projects/octachop.jpg"
          demo="https://youtu.be/pE3YqqcCbCI?si=AF40FJKujGbuT2mP"
        />
        <Card
          title="BrosToday"
          url="https://brostoday.com/"
          description="Django app to guide you through your pushup journey and compete with your friends. It was my sister's idea!"
          imageURL="/images/projects/brostoday.jpg"
          github="https://github.com/Cclayelijah/BrosToday"
        />
        <Card
          title="HIPOS Technology"
          url={"https://hipostech.com/"}
          description={
            "A manufacturing & sourcing company in Shenzhen, China that does business internationally."
          }
          imageURL="/images/projects/hipos.jpeg"
        />
        <Card
          title="True Review Guru"
          url="https://truereviewguru.com/"
          description="YouTube-style tech blog so creators can make money blogging and I can end up on top. An SEO project."
          imageURL="/images/projects/trg.jpg"
        />
        <Card
          title="Vote Kendalyn"
          description="A WordPress site I built for the Mayor of Bountiful, UT in 2021. I also ran her email campaigns using SendGrid."
          imageURL="/images/projects/kendalyn.jpg"
        />
        <Card
          title="TEDx Bountiful"
          description="A WordPress site that I built for my client who was responsible for organizing TEDx events in Bountiful."
          imageURL="/images/projects/tedx.jpg"
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
  }
  ${Card}:hover {
  }
`;

export default Projects;
