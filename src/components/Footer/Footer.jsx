import React from "react";
import styled from "styled-components";

import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";

import Logo from "../../images/logo-bookmark footer.svg";
import "./styles.scss";

const Container = styled.footer`
  width: 100vw;
  padding: 3rem 10rem;

  background-color: var(--color-neutral-very-dark-blue);
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 5rem;
    flex-direction: column;
  }
`;

const Left = styled.div`
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const LogoImg = styled.img``;

const Mid = styled.div`
  margin-right: auto;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &:hover {
    color: var(--color-primary-soft-red);
  }
`;

const Right = styled.div``;

const Social = styled.div`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoImg src={Logo} />
      </Left>

      <Mid>
        <Menu>
          <Item>Features</Item>
          <Item>Pricing</Item>
          <Item>Contact</Item>
        </Menu>
      </Mid>

      <Right>
        <Menu>
          <Social>
            <IoLogoFacebook className="icons" />
          </Social>
          <Social>
            <IoLogoTwitter className="icons" />
          </Social>
        </Menu>
      </Right>
    </Container>
  );
};

export default Footer;
