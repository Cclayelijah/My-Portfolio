import React from "react";
import styled from "styled-components";

const Card = ({ title, url, description, imageURL }) => {
  return (
    <>
      <a href={url}>
        <Container>
          <img src={imageURL} alt="" />
          <div className="info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Container>
      </a>
    </>
  );
};

const Container = styled.div`
  border-radius: 10px;
  max-width: 400px;
  border: 2px solid #566573;
  /* -webkit-box-shadow: 0px 6px 13px 1px #566573;
  box-shadow: 0px 6px 13px 1px #566573; */

  .info {
    border-top: 2px solid #566573;
    margin-top: -4px;
    border-radius: 0 0 12px 12px;
    padding: 10px;
    background-color: white;
    min-height: 180px;
  }
  img {
    width: 100%;
    object-fit: contain;
    border-radius: 8px 8px 0 0;
    margin-left: 0.15px;
  }
  h3 {
    margin: 10px 0;
  }
  p {
    margin: 0;
  }
`;

export default Card;
