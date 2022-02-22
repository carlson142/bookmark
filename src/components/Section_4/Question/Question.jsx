import React from "react";
import styled from "styled-components";

import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";

import "./styles.scss";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 45rem;

  cursor: pointer;

  transition: all 0.2s ease-in;

  padding: 1.5rem 0;

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 550px) {
    max-width: 90vw;
  }
`;

const TitleCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: var(--color-primary-soft-red);
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;

  @media (max-width: 550px) {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Info = styled.p`
  font-size: 1.6rem;
  color: var(--color-neutral-grayish-blue);
  line-height: 1.6;

  padding: 2rem 0;
`;

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <TitleCont>
        <Title>{title}</Title>
        <Button onClick={() => setShow(!show)}>
          {show ? (
            <IoChevronUp className="iconUp" />
          ) : (
            <IoChevronDown className="iconDown" />
          )}
        </Button>
      </TitleCont>
      {show ? <Info>{info}</Info> : null}
    </Container>
  );
};

export default Question;
