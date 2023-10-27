import React from "react";
import styled from "styled-components";

const Card = ({ title, url, description, imageURL, github, demo }) => {
  return (
    <>
    {url ?
      <a href={url} target="_blank" rel="noreferrer">
        <Container>
          <img src={imageURL} alt="" />
          <div className="info">
            <h3>{title}</h3>
            <p>{description}</p>
            {github && <p><a href={github}><Github>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg> Repository
              </Github></a></p>}
            {demo && <p><a href={demo}><Github>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg> Demo
              </Github></a></p>}
          </div>
        </Container>

      </a>
      : <Container>
      <img src={imageURL} alt="" />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Container>
    }
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
    object-fit: cover;
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

const Github = styled.div`
display: flex; 
align-items: center;
background-color: #ccc;
border-radius: 4px;
padding: 3px;
margin-top: 8px;
`;

export default Card;
