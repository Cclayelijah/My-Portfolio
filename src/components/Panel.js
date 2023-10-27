import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Panel = () => {
  const { innerWidth: width } = window;
  return (
    <Container>
      <div className="top">
        <div className="heading">
          <img src="/images/profile pic.jpg" alt="" />
          <h2>Elijah Cannon</h2>
          <div className="title">
            <span>Software Engineer</span>
          </div>
        </div>
        <Info>
          <h3>
            <a href="/CannonResume.pdf" target="_blank" rel="noreferrer">
              Resumé
            </a>
          </h3>
          <Socials>
            <a
              href="https://www.facebook.com/elijah.cannon.16"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/cclayelijah/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/Cclayelijah"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </Socials>
        </Info>
      </div>
      <Nav show={width < 768 ? true : false} />
    </Container>
  );
};

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  h2 {
    display: inline;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  a {
    font-size: 20px;
    margin-left: 10px;
  }
`;

const Container = styled.div`
  width: 250px;
  text-align: center;
  .top {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 5px;
  }
  .heading {
    display: block;
    min-width: 190px;
    .title {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 30px;
      background-color: #f0f2f5;
      font-size: 16px;
    }
  }

  img {
    width: 100%;
    border-radius: 40px;
  }

  @media (max-width: 768px) {
    text-align: left;
    width: 100%;

    .top {
      flex-direction: row;
    }
    .left {
      display: none;
    }

    img {
      display: none;
    }
    h2 {
      margin-top: 0;
    }

    ${Info} {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      flex-flow: column-reverse;
      align-items: flex-end;
      h3 {
        margin: 0;
      }
      ${Socials} {
        i {
          font-size: 28px;
        }
      }
    }
  }

  @media (max-width: 360px) {
    .top {
      flex-direction: column;
      .heading {
        align-items: center;
        margin-bottom: 10px;
      }
      ${Info} {
        text-align: center;
        flex-direction: row;
      }
    }
  }
`;

export default Panel;
