import React from "react";
import styled, { css } from "styled-components";
import { centeredFlex } from "../lib/css";

const ChangerBlock = styled.div`
  ${centeredFlex}
  background: transparent;
  color: white;
  width: 6rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.vertical &&
    css`
      display: auto;
    `}

  ${props =>
    props.horizontal &&
    css`
      display: none;
    `}
`;

const Changer = ({ children, onPrevious, onNext }) => {
  const onClick = onPrevious || onNext;

  return <ChangerBlock onClick={onClick}>{children}</ChangerBlock>;
};

export default Changer;
