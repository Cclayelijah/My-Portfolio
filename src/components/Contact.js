import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formResponse, setFormResponse] = useState(""); //

  const sendForm = (e) => {
    e.preventDefault();
    if (submitted) {
      // my own honeypot
      const data = {};
      const elements = Array.from(e.target);
      elements.map((input) => (data[input.name] = input.value));

      console.log(JSON.stringify(data));
      // Construct an HTTP request
      var xhr = new XMLHttpRequest();
      xhr.open(e.target.method, e.target.action, true);
      xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

      // Send the collected data as JSON
      xhr.send(JSON.stringify(data));

      // Callback function
      xhr.onloadend = (response) => {
        if (response.target.status === 200) {
          // The form submission was successful
          e.target.reset();
          setFormResponse(
            "Thank you for reaching out! I'll surely be ecstatic when I see your message :)"
          );
        } else {
          // The form submission failed
          setFormResponse("There was a problem submitting the form.");
          console.error(JSON.parse(response.target.response).message);
        }
      };
    } else console.log("better luck next time, bot!");
  };

  return (
    <Container>
      <h1>Contact Me</h1>
      <form
        action="https://67wwqzvnth.execute-api.us-east-1.amazonaws.com/dev/Contact"
        type="post"
        onSubmit={sendForm}
        className={submitted ? "hide" : ""}
      >
        <div className="name">
          <input
            className="rname"
            type="text"
            name="firstname"
            placeholder="First Name"
            required={true}
          />
          <input
            className="lname"
            type="text"
            name="lastname"
            placeholder="Last Name"
            required={true}
          />
        </div>

        <input type="text" name="email" placeholder="Email" required={true} />
        <textarea
          type="text-area"
          name="message"
          placeholder="Content"
          rows="5"
          required={true}
        />
        <button
          type="submit"
          onClick={() => {
            setSubmitted(true);
          }}
        >
          Send
        </button>
      </form>
      <p className={`response ${submitted ? "" : "hide"}`}>{formResponse}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  p{
    justify-self: center;
    text-align: center;
  }
  .hide{
    display: none;
  }
    div {
      display: flex;
      flex: 1;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      .name {
        display: flex;
        width: 100%;
        .lname {
        max-height: 72px;
          flex: 1;
          margin-left: 10px;
        }
        .rname {
        max-height: 72px;
          margin-right: 10px;
          flex: 1;
        }
      }

      input,
      textarea {
        font-size: 18px;
        margin: 10px 0;
        padding: 14px;
        border-radius: 10px;
        color: #566573;
        border: 2px solid #566573;
        outline: none;
        width:100%;
      }
      input:focus,
      textarea:focus {
        border: 2px solid #f1948a;
      }
      button {
        width: fit-content;
        font-size: 18px;
        margin: 10px 0;
        padding: 14px 34px;
        border-radius: 10px;
        color: #566573;
        background-color: #f0f2f5;
        border: 2px solid #566573;
        outline: none;
      }
      button:hover {
        //color: #f1948a;
        //border: 2px solid #f1948a;
        background-color: #85c1e9;
        color: white;
      }
      @media (max-width: 570px) {
        input,
        textarea {
          max-width: 100%;
        }
        .name {
          flex-direction: column;
          .lname {
            display: inline;
            margin-left: 0;
          }
          .rname {
            display: inline;
            margin-right: 0;
          }
        }
      }
    }
  }
`;

export default Contact;
