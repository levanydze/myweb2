import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Header() {
  return (
    <WRAP>
      <div className="space"></div>
      <NavLink className="head gabriola" to="/">
        <h1>Art of</h1>
        <h2>L</h2>
        <h1>evanidze</h1>
      </NavLink>
      <Nav></Nav>
    </WRAP>
  );
}
export default Header;

const WRAP = styled.div`
  .head {
    display: flex;
    justify-content: center;
    padding: 2rem;
    color: var(--darker);
    font-size: 2rem;
    text-align: center;
    letter-spacing: 20px;
    padding: 2rem;
    opacity: 1;
    text-decoration: none;
    h1 {
      opacity: 0.5;
      transition: all 2s;
      font-style: none;
      font-size: 35px;
    }
    h2 {
      opacity: 5;
      transition: all 2s;
      font-style: none;
      font-size: 35px;
      padding-left: 2rem;
    }

    &:hover {
      h1,
      h2 {
        opacity: 1;
        color: var(--lighter);
      }
    }
    &.active {
      h1,
      h2 {
        opacity: 1;
        color: var(--medium);
      }
    }
    @media (max-width: 640px) {
      padding: 0;
      scale: 0.7;
      letter-spacing: 5px;
      justify-content: left;
      margin-left: -20px;
      display: none;
    }
  }

  background-color: var(--dark);
  width: 100%;
  //media
  @media (max-width: 640px) {
  }
`;
