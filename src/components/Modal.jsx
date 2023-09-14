import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Modal({ setModalOpen, selectedImg, modalOpen, next, prev }) {
  return (
    <CONTAINER>
      <div className="wrapper">
        <FaTimes className="faTimes" onClick={() => setModalOpen(!modalOpen)} />
        <div className="img-wrap">
          <div className="fa-div text-light">
            <FaArrowLeft className="prev" onClick={prev} />
            <FaArrowRight className="next" onClick={next} />
          </div>
          <div className="img-overlay"></div>
          <img src={selectedImg} onClick={next} alt="" />
        </div>
      </div>
    </CONTAINER>
  );
}
export default Modal;

const CONTAINER = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  width: 100%;
  height: 100vh;

  .wrapper {
    backdrop-filter: blur(8px);
    background-color: var(--darkSolid);
    padding: 1rem;
    height: 100%;
    width: 100%;

    img {
      width: auto;
      max-width: 100%;
      max-height: 100%;
      position: fixed;
      padding: 1rem;
    }
  }
  .img-wrap {
    .img-overlay {
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
      opacity: 0;
    }
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .fa-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    overflow: hidden;

    .prev {
      height: 6rem;
      width: 6rem;
      padding: 2rem;
      color: #ffffff10;
      transition: all 0.5s;
      cursor: pointer;
      z-index: 20;

      &:hover {
        color: var(--lighter);
        border: var(--medium);
      }
    }
    .next {
      height: 6rem;
      width: 6rem;
      padding: 2rem;
      color: #ffffff10;
      transition: all 0.5s;
      cursor: pointer;
      z-index: 20;

      &:hover {
        color: var(--lighter);
        border: var(--medium);
      }
    }
  }

  .faTimes {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.5rem;
    margin: 1rem;
    cursor: pointer;
    z-index: 21;
    transition: all 0.3s;
    color: var(--lighter);
    &:hover {
      color: var(--light);
    }
  }
  @media (max-width: 720px) {
    .fa-div {
      .prev,
      .next {
        padding: 0.3rem;
        height: 2rem;
        width: 3rem;

        color: #ffffff3c;
        &:hover {
          color: #ffffff3c;
        }
      }
    }
  }
`;
