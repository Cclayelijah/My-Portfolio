import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ show }) => {
  const location = useLocation();
  const activeRoute = location.pathname;

  if (show) {
    return (
      <Container>
        <div className="left"></div>
        <div className="right">
          <ul>
            <li>
              <Link
                className={`tab ${activeRoute === "/" ? "active" : ""}`}
                to="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`tab ${activeRoute === "/Projects" ? "active" : ""}`}
                to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`tab ${activeRoute === "/Contact" ? "active" : ""}`}
                to="/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    );
  } else {
    return <div></div>;
  }
};

const Container = styled.div`
  display: flex;
  background-color: white;
  max-height: 100px;

  .left {
    flex-grow: 1;
    border-radius: 0 0 40px 0;
    background-color: #f0f2f5;
  }
  .right {
    background-color: #f0f2f5;
    min-width: 300px;
    display: flex;

    ul {
      margin: 0;
      width: 100%;
      border-radius: 40px 50px 0px 0px;
      background-color: white;
      display: flex;
      justify-content: right;
      padding: 25px 10px 0;

      li {
        padding: 0 30px;
        font-size: 20px;
        font-weight: 600;
        line-height: 2;
        list-style: none;
        position: relative;
        .tab {
          text-decoration: none;
          color: #566573;
        }
        .tab:after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          height: 3px;
          width: 100%;
          border-radius: 3px;
        }
        .tab.active:after {
          background-color: #f1948a;
          animation-name: slide-up;
          animation-duration: 0.6s;
        }
      }
      .active {
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    .left {
      border-radius: 0;
      justify-self: flex-end;
    }

    .right {
      width: 100%;
      ul {
        text-align: center;
        border-radius: 0;
        padding-top: 10px;
        li {
          padding: 0;
          flex: 1;
        }
      }
    }
  }
`;

export default Nav;
