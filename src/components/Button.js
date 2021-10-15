import React from "react";
import styled from "styled-components";
const ButtonStyle = styled("button")`
  padding: 1rem 3rem;
  border: none;
  outline: none;
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  background-color: var(--${({ bg }) => (bg ? bg : "bgGrey")});
  color: var(--${({ color }) => (color ? color : "colorPrimary")});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: fit-content;
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: 400;
  position: relative;
  z-index: 10;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: inherit;
    clip-path: inset(50%);
    transition: all 0.4s linear;
  }
  &:hover::after {
    clip-path: inset(0%);
    background-color: var(--bgGrey);
  }
`;
const Button = (props) => {
  return <ButtonStyle {...props}>{props.value}</ButtonStyle>;
};

export default Button;
