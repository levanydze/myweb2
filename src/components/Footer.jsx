import React from "react";
import { styled } from "styled-components";

function Footer() {
  return (
    <WRAP>
      <div className="copyright">
        <h6>© Levani Levanidze.</h6> All Rights Reserved
      </div>
      <div>
        <p>Made by Levanidze</p>
      </div>
    </WRAP>
  );
}

export default Footer;

const WRAP = styled.div`
  background-color: var(--dark);
  color: var(--medium);
  padding: 2rem 4rem;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;

  .copyright {
    display: flex;
    gap: 2rem;
    align-items: center;

    h6 {
      font-weight: bold;
      color: var(--lighter);
    }
  }
`;
