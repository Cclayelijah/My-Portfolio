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
        I love computers and anything to do with them. I love creating things,
        as art is much more than simply human expression. One day, I will start
        a software company. Another day I will own multiple companies. I am
        confident, ambitious and adventurous. My greatest strength is perhaps
        effective learning. I make quick work of pretty much anything new I pick
        up. I like sports, especially longboarding and mountain biking. I can
        hack your mum faster than she can power on her computer (lol, as if!). I
        must say I appreciate music on like a whole other level, though I wish I
        wrote more of my own. I love poetry! Did I mention I speak Chinese? :)
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
            <div className="skills seven">
              ReactJS <span>70%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills six">
              NodeJS <span>60%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills seven">
              MongoDB <span>70%</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <div className="skills eight">
              WordPress <span>80%</span>
            </div>
          </div>
          <div className="container">
            <div className="skills seven">
              PHP/MySQL<span>70%</span>
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
