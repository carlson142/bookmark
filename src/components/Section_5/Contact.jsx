import React from "react";
import { useState } from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

import { IoAlert } from "react-icons/io5";

const Container = styled.section`
  width: 100vw;
  padding: 8rem;

  background-color: var(--color-primary-soft-blue);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 8rem 5rem;
  }

  @media (max-width: 550px) {
    padding: 8rem 2rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: inherit;

  text-transform: uppercase;
  letter-spacing: 1px;

  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: inherit;

  margin-bottom: 3rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const InputContainer = styled.div`
  width: 50rem;
  background-color: #00808036;

  display: flex;
  justify-content: space-between;

  position: relative;

  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Input = styled.input.attrs({ placeholder: "Enter your email address" })`
  width: 60%;
  outline: none;
  border-radius: 0.5rem;

  font-size: 1.6rem;
  font-family: inherit;
  padding: 0 2rem;

  border: ${(props) =>
    props.error === true
      ? "2px solid var(--color-primary-soft-red)"
      : "2px solid transparent"};

  &::placeholder {
    color: var(--color-neutral-grayish-blue);
  }

  @media (max-width: 550px) {
    padding: 2rem;
    width: 100%;

    margin-bottom: 5rem;
  }
`;

const ErrorMessadge = styled.div`
  width: 60%;
  padding: 1rem;
  background-color: var(--color-primary-soft-red);

  font-size: 1.4rem;
  font-style: italic;

  position: absolute;
  bottom: -3.5rem;

  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media (max-width: 550px) {
    width: 100%;
    bottom: 6rem;
  }
`;

const ErrorIcon = styled.div`
  position: absolute;
  left: 55%;
  top: 20%;

  opacity: ${(props) => (props.error === true ? 1 : 0)};

  @media (max-width: 550px) {
    top: 10%;
    left: 90%;
  }
`;

const Contact = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const emailValidation = (input) => {
    let validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input === "" || !input.match(validation)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <Container>
      <SubTitle>35,000+ already joined</SubTitle>
      <Title>Stay up-to-date with what we’re doing</Title>

      <InputContainer>
        <Input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          error={error}
        />

        <ErrorIcon error={error}>
          <IoAlert size={25} color="red" />
        </ErrorIcon>

        <CustomButton primary onClick={() => emailValidation(input)}>
          Contact Us
        </CustomButton>

        {error ? (
          <ErrorMessadge>Whoops, make sure it is an email</ErrorMessadge>
        ) : null}
      </InputContainer>
    </Container>
  );
};

export default Contact;
