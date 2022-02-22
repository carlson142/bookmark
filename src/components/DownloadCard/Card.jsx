import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

import dots from "../../images/bg-dots.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  padding: 4rem 0 3rem 0;

  &:not(:last-child) {
    margin-right: 5rem;

    @media (max-width: 1024px) {
      margin-right: 0;
    }
  }

  transform: ${(props) => props.bottom && `translateY(${props.bottom})`};

  @media (max-width: 1024px) {
    max-width: 28rem;
  }
`;

const Top = styled.div``;

const Image = styled.img``;

const Mid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 0;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  letter-spacing: 1px;

  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  color: var(--color-neutral-grayish-blue);
`;

const Bot = styled.div`
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const BotImageCont = styled.div`
  margin-bottom: 2rem;
`;

const BotImage = styled.img`
  position: relative;
  top: 0;
`;

const Card = ({ img, browser, version, bottom = 0 }) => {
  return (
    <Container bottom={bottom}>
      <Top>
        <Image src={img} alt={browser} />
      </Top>

      <Mid>
        <Title>Add to {browser}</Title>
        <Text>Minimum version {version}</Text>
      </Mid>

      <Bot>
        <BotImageCont>
          <BotImage src={dots} alt="dots" />
        </BotImageCont>
        <CustomButton secondary style={{ fontSize: "1.6rem" }}>
          Add & Install Extension
        </CustomButton>
      </Bot>
    </Container>
  );
};

export default Card;
