import React from "react";
import styled from "styled-components";

import Logo from "../../images/logo-bookmark.svg";
import CustomButton from "../CustomButton/CustomButton";

import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";

const Container = styled.header`
  width: 100vw;

  padding: 2rem 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoCont = styled.div``;

const LogoImg = styled.img``;

const DTMenu = styled.ul`
  display: flex;
  list-style: none;

  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DTItem = styled.li`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  transition: all 0.2s ease-in;

  &:hover {
    color: var(--color-primary-soft-red);
  }
`;

const BtnCont = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamCont = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <Container>
      <LogoCont>
        <LogoImg src={Logo} alt="Logo" />
      </LogoCont>

      <DTMenu>
        <DTItem>Features</DTItem>
        <DTItem>Pricing</DTItem>
        <DTItem>Contact</DTItem>
      </DTMenu>

      <HamCont onClick={() => setShowMobile(!showMobile)}>
        {showMobile ? <IoClose size={25} /> : <IoMenu size={25} />}
      </HamCont>

      {showMobile ? (
        <MobileMenu show={showMobile} setShow={setShowMobile} />
      ) : null}

      <BtnCont>
        <CustomButton primary style={{ marginLeft: "4rem" }}>
          LOGIN
        </CustomButton>
      </BtnCont>
    </Container>
  );
};

export default Header;
