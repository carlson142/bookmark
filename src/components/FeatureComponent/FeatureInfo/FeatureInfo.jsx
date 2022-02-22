import React from "react";
import styled from "styled-components";
import CustomButton from "../../CustomButton/CustomButton";

const Container = styled.div`
  max-width: 100vw;
  height: 42rem;

  display: flex;

  margin-top: 4rem;

  @media (max-width: 1255px) {
    flex-direction: column;
    height: 100%;
  } ;
`;

const Left = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 1255px) {
    width: 100%;
  }

  &::before {
    content: "";
    display: block;

    height: 60%;
    width: 70%;
    background-color: var(--color-primary-soft-blue);

    position: absolute;
    left: 0%;
    top: 70%;
    transform: translate(0, -50%);

    border-bottom-right-radius: 20rem;

    @media (max-width: 1255px) {
      display: none;
    }
  }
`;

const ImgCont = styled.div`
  height: 100%;
  width: 100%;

  position: relative;
`;

const Image = styled.img`
  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;

const Right = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  padding: 2rem;

  @media (max-width: 1255px) {
    width: 100%;
    align-items: center;

    padding-top: 5rem;
  } ;
`;

const Title = styled.h2`
  font-size: 3.5rem;

  margin-bottom: 2rem;

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-blue);

  text-align: start;

  width: 70%;

  margin-bottom: 3rem;

  @media (max-width: 1255px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const FeatureInfo = ({ id, title, img, text }) => {
  return (
    <Container>
      <Left>
        <ImgCont>
          <Image src={img} />
        </ImgCont>
      </Left>

      <Right>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <CustomButton secondary>More info</CustomButton>
      </Right>
    </Container>
  );
};

export default FeatureInfo;
