import React from "react";
import styled from "styled-components";

import { IoClose } from "react-icons/io5";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import logo from "../../../images/logo-bookmark mobile.svg";

import CustomButton from "../../CustomButton/CustomButton";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: #252b46ef;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem 5rem 5rem 5rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoCont = styled.div``;

const LogoImg = styled.img``;

const IconCont = styled.div``;

const Mid = styled.div`
  color: white;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
`;

const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  width: 100%;
`;

const Item = styled.li`
  font-size: 3rem;
  text-transform: uppercase;

  padding: 2rem 0;

  border-bottom: 1px solid white;
  &:first-child {
    border-top: 1px solid white;
  }

  width: 100%;
`;

const Bot = styled.div``;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const Social = styled.div`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const MobileMenu = ({ show, setShow }) => {
  return (
    <Container>
      <Top>
        <LogoCont>
          <LogoImg src={logo} />
        </LogoCont>

        <IconCont
          onClick={() => {
            setShow(!show);
          }}
        >
          <IoClose size={25} color="white" />
        </IconCont>
      </Top>

      <Mid>
        <List>
          <Item>Feature</Item>
          <Item>Pricing</Item>
          <Item>Contact</Item>
        </List>

        <CustomButton neutral>LOGIN</CustomButton>
      </Mid>

      <Bot>
        <Menu>
          <Social>
            <IoLogoFacebook className="icons" />
          </Social>
          <Social>
            <IoLogoTwitter className="icons" />
          </Social>
        </Menu>
      </Bot>
    </Container>
  );
};

export default MobileMenu;
