import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
import { faq } from "../data";
import Question from "./Question/Question";

const Container = styled.section`
  width: 100vw;

  padding: 15rem 5rem 10rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 550px) {
    padding: 15rem 2rem 5rem 2rem;
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

const FaqComponent = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
`;

const Faq = () => {
  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <Text>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </Text>
      <FaqComponent>
        {faq.map((el) => {
          return <Question key={el.id} {...el} />;
        })}
      </FaqComponent>
      <CustomButton secondary>More info</CustomButton>
    </Container>
  );
};

export default Faq;
