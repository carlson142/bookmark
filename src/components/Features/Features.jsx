import React from "react";
import styled from "styled-components";
import FeatureComponent from "../FeatureComponent/FeatureComponent";

const Container = styled.section`
  width: 100vw;

  padding: 5rem;
  padding-top: 0;

  display: flex;
  flex-direction: column;

  text-align: center;

  @media (max-width: 1255px) {
    padding-top: 5rem;
  }

  @media (max-width: 550px) {
    padding: 5rem 2rem 2rem 2rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;

  margin-bottom: 3rem;
`;

const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-blue);

  width: 40%;
  margin: 0 auto;

  margin-bottom: 3rem;

  @media (max-width: 1255px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    width: 100%;
    /* font-size: 1.6rem; */
  }
`;

const Features = () => {
  return (
    <Container>
      <Title>Features</Title>
      <Text>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </Text>
      <FeatureComponent />
    </Container>
  );
};

export default Features;
