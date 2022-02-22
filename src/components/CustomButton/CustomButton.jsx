import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 2px solid transparent;
  border-radius: 1rem;

  padding: 1rem 2.5rem;
  font-size: 1.8rem;
  font-family: inherit;
  cursor: pointer;
  letter-spacing: 1px;

  transition: all 0.2s ease-in;

  /* PRIMARY STYLES */
  ${(props) =>
    props.primary &&
    `
    background-color: var(--color-primary-soft-red);
    color: white;

    &:hover {
    background-color: white;
      color: var(--color-primary-soft-red);
      border: 2px solid var(--color-primary-soft-red);
    } 
  `}

  /* SECONDARY STYLES */
  ${(props) =>
    props.secondary &&
    `
    background-color: var(--color-primary-soft-blue);
    color: white;

    &:hover {
    background-color: transparent;
      color: var(--color-primary-soft-blue);
      border: 2px solid var(--color-primary-soft-blue);
    } 
  `} 
  
  /* NEUTRAL STYLES */
  ${(props) =>
    props.neutral &&
    `
    background-color:rgb(236, 235, 235);
    color: var(--color-neutral-very-dark-blue);
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: transparent;
      border: 2px solid var(--color-neutral-very-dark-blue);
      box-shadow: none;
    } 
  `}
`;

const CustomButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
