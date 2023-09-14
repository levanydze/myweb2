import React from "react";
import { styled } from "styled-components";
import ContactForm from "../components/ContactForm";
import img from "../localImages/me/Screenshot 2023-08-11 at 14.42.48.png";

function Contact() {
  return (
    <WRAP>
      <h2>Contact</h2>
      <div className="cont-wrap">
        <ContactForm></ContactForm>
        <div className="imgdiv">
          <img src={img} alt="" />
        </div>
      </div>
    </WRAP>
  );
}

export default Contact;
const WRAP = styled.div`
  width: 100%;
  background-color: var(--dark);
  text-align: center;
  background-color: var(--dark);
  padding-bottom: 10rem;
  .cont-wrap {
    max-width: 1600px;
    display: flex;
    width: 90%;
    margin: auto;
    .imgdiv {
      width: 100%;
      border-radius: 2rem;
      padding-left: 2rem;

      img {
        object-fit: cover;
        height: 100%;
        border-radius: 1rem;
        scale: 0.9;
        margin-top: 2.2rem;
        max-width: 100%;
      }
    }
  }
  h2 {
    color: var(--light);
    font-size: 2rem;
    padding: 2rem;
  }

  @media (max-width: 720px) {
    .cont-wrap {
      flex-direction: column-reverse;
      .imgdiv {
        width: 100%;
        margin: auto;
        padding: 0;
        img {
          border-radius: 50%;
          max-height: 200px;
          margin: 0 auto;
        }
      }
    }
  }
`;
