import React from "react";
import styled from "styled-components";
import { centeredFlex } from "../lib/css";

const HeaderBlock = styled.div`
  ${centeredFlex}
  justify-content: flex-start;
  background: rgb(30, 30, 50);
  font-weight: bold;
  width: 100%;
  height: 5rem;
  box-shadow: 0px 3px 4px rgb(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    color: white;
    margin: 0;
    padding: 0;
    padding-left: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <a href="/">
        <h1>Astronomy Picture of the Day</h1>
      </a>
    </HeaderBlock>
  );
};

export default Header;
