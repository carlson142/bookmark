import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 45%;
  height: 8vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    flex-direction: column;
    min-height: 20rem;
    width: 70%;
  }
`;

const CustomButton = styled.button`
  border: none;
  background-color: transparent;

  font-size: 1.8rem;
  font-family: inherit;

  color: var(--color-neutral-grayish-blue);
  cursor: pointer;

  transition: all 0.2s ease-in;
  position: relative;

  &:not(:last-child) {
    margin-right: 5rem;

    @media (max-width: 550px) {
      margin-right: 0;
      margin-bottom: 4rem;
    }
  }

  &:hover {
    color: var(--color-primary-soft-red);
  }

  color: ${(props) =>
    props.value === props.id && "var(--color-neutral-very-dark-blue)"};

  &::after {
    content: "";
    display: block;

    position: absolute;
    bottom: -2rem;

    height: 2px;
    width: 100%;

    background-color: var(--color-primary-soft-red);

    opacity: 0;

    opacity: ${(props) => props.value === props.id && "1"};
  }
`;

const FeatureBtns = ({ value, setValue, featureData }) => {
  return (
    <Container>
      {featureData.map((el) => {
        return (
          <CustomButton
            key={el.title}
            onClick={() => {
              setValue(el.id);
            }}
            value={value}
            id={el.id}
          >
            {el.btnName}
          </CustomButton>
        );
      })}
    </Container>
  );
};

export default FeatureBtns;
