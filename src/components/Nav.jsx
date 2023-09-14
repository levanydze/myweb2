import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Records from "../records.json";

function Nav() {
  const [navBar, setNavBar] = useState(false);
  const navHandler = () => {
    setNavBar(!navBar);
  };
  return (
    <WRAP>
      <div className={`under-blur ${!navBar ? "hide" : ""}`}></div>
      <div className={`burger-logo ${!navBar ? "hide" : ""}`}>
        <Link to="/" className="burger-art gabriola z-50">
          <h1>Art of Levanidze</h1>
        </Link>
      </div>
      <div className={`wrapper ${!navBar ? "top-space" : ""}`}>
        <FaTimes
          className={`close-btn ${!navBar ? "btn-dissapear" : ""}`}
          onClick={navHandler}
        ></FaTimes>

        <FaBars
          className={`open-btn ${navBar ? "btn-dissapear" : ""}`}
          onClick={navHandler}
        ></FaBars>
        <div className={`nav-wrapper ${navBar ? " hide " : ""}`}>
          <Link
            className=" sm:hidden text-2xl text-light absolute top-4 "
            to="/"
            onClick={navHandler}
          >
            Art of Levanidze
          </Link>
          <NavLink onClick={navHandler} className="link" to="/landscape">
            Landscape
          </NavLink>
          <NavLink onClick={navHandler} className="link" to="/cityscape">
            Cityscape
          </NavLink>
          <NavLink onClick={navHandler} className="link" to="/portrait">
            Portrait
          </NavLink>
          <NavLink onClick={navHandler} className="link" to="/archive">
            Archive
          </NavLink>
          <NavLink onClick={navHandler} className="link" to="/about">
            About
          </NavLink>
          <NavLink onClick={navHandler} className="link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </WRAP>
  );
}

export default Nav;

const WRAP = styled.div`
  .burger-art {
    z-index: 1000;
    text-decoration: none;
    color: var(--lighter);
    z-index: 3;
    h1 {
      font-size: 30px;
      letter-spacing: 5px;
    }
  }
  .link {
    text-decoration: none;
    position: relative;
  }
  // General styles
  .wrapper {
    position: relative;

    .nav-wrapper {
      font-family: "BenchNine", sans-serif;
      display: flex;
      color: var(--lighter);
      font-size: 1.2rem;
      width: 100%;
      justify-content: center;
      gap: 5%;
      padding-bottom: 4rem;
      margin: 0 auto;
    }

    .link {
      letter-spacing: 1px;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 2.5);
      display: flex;
      color: var(--lighter);

      &:hover {
        color: var(--light);
        scale: 1.1;
      }

      &:after {
        content: "";
        position: absolute;
        right: 0;
        height: 2px;
        bottom: -3px;
        width: 0%;
        background-color: var(--undermenu);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      &:hover::after {
        width: 100%;
        left: 0;
      }

      &.active {
        color: var(--light);
        scale: 1.1;

        &:after {
          background-color: var(--undermenu);
          width: 100%;
        }
      }
    }
  }

  // Media Styles
  .open-btn,
  .close-btn,
  .under-blur,
  .burger-logo {
    display: none;
  }

  @media (max-width: 640px) {
    .under-blur {
      display: flex;
      top: 0;
      width: 100%;
      height: 4rem;
      align-items: center;
      display: flex;
      font-size: 1.4rem;
      padding-left: 2rem;
      background-color: white;
    }
    .burger-logo {
      display: flex;
      position: fixed;
      top: 0;
      width: 100%;
      background-color: var(--dark);
      height: 4rem;
      align-items: center;
      display: flex;
      color: var(--lighter);
      font-size: 1.4rem;
      padding-left: 2rem;
      backdrop-filter: blur(10px);
      z-index: 1;
    }
    .wrapper {
      .nav-wrapper {
        height: 100vh;
        padding-bottom: 15rem;
        flex-direction: column;
        align-items: center;
        position: fixed;
        background-color: var(--dark);
        backdrop-filter: blur(10px);
        margin-top: -4rem;
        transform: translatey(-120%);
        transition: transform 0.5s ease-in-out;
        z-index: 2;
      }

      .open-btn,
      .close-btn {
        display: flex;
        cursor: pointer;
        margin: 1rem;
        font-size: 2rem;
        color: var(--lighter);
        position: absolute;
        z-index: 3;
        right: 0;
        top: 0;
        position: fixed;
      }
      .hide {
        transform: translateX(0);
      }
      .btn-dissapear {
        display: none;
      }
    }

    .hide {
      transform: translateX(0);
    }
  }
`;
