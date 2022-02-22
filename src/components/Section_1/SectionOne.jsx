import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

import hero from "../../images/illustration-hero.svg";

const Container = styled.section`
  width: 100vw;
  min-height: 80vh;

  display: flex;

  @media (max-width: 1255px) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  flex: 0 0 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 5rem;

  @media (max-width: 1255px) {
    text-align: center;
    align-items: center;
  }

  @media (max-width: 550px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 5rem;

  margin-bottom: 3rem;

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-blue);

  margin-bottom: 3rem;
`;

const BtnGroup = styled.div`
  display: flex;

  min-width: 45rem;
  max-width: 46rem;
  justify-content: space-between;

  @media (max-width: 550px) {
    min-height: 11rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;
  padding-top: 5rem;

  position: relative;

  &::before {
    content: "";
    display: block;

    height: 50%;
    width: 70%;
    background-color: var(--color-primary-soft-blue);

    position: absolute;
    right: 0%;
    top: 60%;
    transform: translate(0, -50%);

    border-bottom-left-radius: 20rem;

    @media (max-width: 1255px) {
      width: 40%;
    }

    @media (max-width: 550px) {
      width: 90%;
    }
  }
`;

const ImgCont = styled.div`
  position: relative;

  @media (max-width: 1255px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1255px) {
    height: 100%;
    width: 100vw;
  }
`;

const Image = styled.img`
  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

const SectionOne = () => {
  return (
    <Container>
      <Left>
        <Title>A Simple Bookmark Manager</Title>
        <Text>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Text>
        <BtnGroup>
          <CustomButton secondary>Get it on Chrome</CustomButton>
          <CustomButton neutral>Get it on Firefox</CustomButton>
        </BtnGroup>
      </Left>

      <Right>
        <ImgCont>
          <Image src={hero} />
        </ImgCont>
      </Right>
    </Container>
  );
};

export default SectionOne;
