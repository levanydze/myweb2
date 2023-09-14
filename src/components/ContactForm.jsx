import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";

export const ContactForm = () => {
  const [isModal, setIsModal] = useState(false);
  const form = useRef();
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const sendEmail = (e) => {
    e.preventDefault();
    setIsModal(true);

    emailjs
      .sendForm(
        "service_u6gjg6s",
        "template_jsv5qfx",
        form.current,
        "y8nREYl_1OCsl1rBw"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <WRAP>
      <div className={`modal ${isModal ? "isOpen" : ""}`}>
        <div className="modal-wrap">
          <h4>Thank you for message</h4>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label className="email">
          <div className="icon">
            <FiMail className="" size={24} />
          </div>
          Email
        </label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="button" type="submit" value="Send" />
      </form>
    </WRAP>
  );
};

export default ContactForm;

const WRAP = styled.div`
  transition: all 1s;

  .modal {
    display: none;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
    background-color: #00000082;
    .modal-wrap {
      box-shadow: var(--lighter) 0px 0px 20px 20px;
      height: 30%;
      width: 70%;
      background-color: var(--medium);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 100;
      transform: translate(-50%, -50%);
      display: grid;
      place-content: center;
      border-radius: 2rem;
      color: #17e817;
      h4 {
        font-size: 3rem;
      }
    }
  }
  .isOpen {
    scale: 1;
    display: flex;
  }
  margin: auto;
  width: 100%;
  form {
    text-align: left;
    color: var(--lighter);
    display: flex;
    flex-direction: column;
    label {
      padding: 4rem 0rem 0.5rem 0.5rem;
    }
    input {
      width: 100%;
      padding-left: 1rem;
      height: 3rem;
      font-size: 1.2rem;
      color: var(--dark);
      font-weight: 500;
      border-radius: 0.3rem;

      &:focus {
        border: 3px solid rgb(187, 185, 60);
      }
    }
    textarea {
      color: var(--dark);
      resize: none;
      min-height: 200px;
      padding: 0.3rem;
      font-size: 1.2rem;
      border-radius: 0.3rem;
    }

    .button {
      padding-left: 0;
      margin-top: 1rem;
      background-color: var(--medium);
      transition: all 0.3s;
      height: 4rem;
      font-size: 1.5rem;
      color: var(--light);
      &:hover {
        cursor: pointer;
        background-color: var(--lighter);
        color: var(--dark);
      }
    }
  }

  .email {
    display: flex;
    gap: 0.5rem;
    .icon {
    }
  }
`;
