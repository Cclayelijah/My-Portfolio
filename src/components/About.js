import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <div className="heading">
        <h1>About Me</h1>
        <div className="icons">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>Salt Lake City
          </div>
          <div className="icon">
            <i className="fas fa-calendar-day"></i>07/29/1999
          </div>
        </div>
      </div>
      <p>
        I like computers, data, and aesthetic design. I love any form of art,
        especially music. I love the sense of accomplishment when I create
        something amazing. One day, I will build a company that improves the
        lives of others. I am confident, ambitious and adventurous. My greatest
        strength is perhaps robust learning. I make quick work of pretty much
        anything new I pick up. I like sports, especially longboarding and
        mountain biking. I enjoy web scraping and pen testing. I love poetry!
        Did I mention I speak Chinese? &#128526;
      </p>
      <h2>My Dev Skills</h2>
      <div className="my-skills">
        <div className="left">
          <div className="container">
            <div className="skills nine">
              HTML/CSS <span>90%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills eight">
              JavaScript <span>80%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills eight">
              ReactJS <span>80%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills seven">
              NodeJS <span>70%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills six">
              TypeScript <span>60%</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <div className="skills nine">
              WordPress <span>90%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills eight">
              SQL<span>80%</span>
            </div>
          </div>

          <div className="container">
            <div className="skills eight">
              Python <span>80%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills seven">
              C++ <span>70%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills seven">
              Java <span>70%</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .heading {
    display: flex;
    h1 {
      display: inline;
      margin-bottom: 0;
    }
    .icons {
      flex: 1;
      justify-content: right;
      align-items: center;
      display: flex;
      .icon {
        margin-left: 15px;
        i {
          margin-right: 5px;
        }
      }
    }
  }
  .my-skills {
    display: flex;
  }

  .left {
    flex: 1;
    margin-right: 10px;
  }
  .right {
    flex: 1;
    margin-left: 10px;
  }

  .container {
    width: 100%;
    background-color: #f0f2f5;
    margin-bottom: 10px;
    border-radius: 20px;
  }

  .skills {
    padding: 5px 12px;
    color: white;
    background-color: #85c1e9;
    border-radius: 20px;
    font-size: 14px;
    span {
      float: right;
    }
  }
  .six {
    width: 60%;
    animation-name: load6;
    animation-duration: 2s;
  }
  .seven {
    width: 70%;
    animation-name: load7;
    animation-duration: 2s;
  }
  .eight {
    width: 80%;
    animation-name: load8;
    animation-duration: 2s;
  }
  .nine {
    width: 90%;
    animation-name: load9;
    animation-duration: 2s;
  }

  @media (max-width: 500px) {
    .heading {
      flex-direction: column;
      .icons {
        justify-content: left;
        .icon {
          margin-left: 0;
          margin-right: 15px;
        }
      }
    }
  }
`;

export default About;
