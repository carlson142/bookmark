import React from "react";
import styled from "styled-components";
import Card from "../DownloadCard/Card";

import img1 from "../../images/logo-chrome.svg";
import img2 from "../../images/logo-firefox.svg";
import img3 from "../../images/logo-opera.svg";

const Container = styled.section`
  width: 100vw;

  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 550px) {
    padding: 5rem 2rem 2rem 2rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;

  margin-bottom: 3rem;

  @media (max-width: 550px) {
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-blue);
  text-align: center;

  width: 40%;
  margin: 0 auto;

  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const CardsContainer = styled.div`
  margin-top: 2rem;

  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Download = () => {
  return (
    <Container>
      <Title>Download the extension</Title>
      <Text>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </Text>

      <CardsContainer>
        <Card img={img1} browser="Chrome" version="62" />
        <Card img={img2} browser="Firefox" version="55" bottom="5rem" />
        <Card img={img3} browser="Opera" version="46" bottom="10rem" />
      </CardsContainer>
    </Container>
  );
};

export default Download;
