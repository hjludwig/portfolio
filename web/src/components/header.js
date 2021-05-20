import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import Socials from "./Socials";

const StyledHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  padding-left: 1em;
`;
const Logo = styled.div`
  color: white;
  font-size: calc(10vh / 2.5);
  background: var(--blue);
  padding: 0 0.75em;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Crimson Text", serif;
  font-weight: 200;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Menu = styled.div`
  z-index: 9;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  width: 90vw;
  height: 100vh;
  padding: 0 2em;
  box-shadow: 0 0 10px 0 var(--grey);
  transition: transform 0.5s ease;
  transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(100vw)")};

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2em;
    align-items: center;
    transform: none;
    width: auto;
    height: 10vh;
    background: transparent;
    padding: 0;
    box-shadow: none;
    position: static;
  }
`;
const MenuButton = styled.div`
  @media screen and (min-width: 650px) {
    display: none;
  }
  z-index: 99;
  width: 2.5em;
  height: 2.5em;
  padding: 1.5em;
  cursor: pointer;
  position: fixed;
  right: 1em;

  background: var(--very-light-grey);
  span {
    display: block;
    width: 2em;
    border-top: 1px solid var(--grey);
    position: absolute;
    top: 50%;
    left: 50%;
  }
  span:nth-child(1) {
    transition: transform 0.5s ease;
    transform: ${props =>
      !props.isOpen
        ? "translateX(-50%) translateY(-0.5em)"
        : "translateX(-50%) scaleY(0)"};
  }
  span:nth-child(2) {
    transition: transform 0.5s ease;
    transform: ${props =>
      !props.isOpen
        ? "translateX(-50%) translateY(0)"
        : "translateX(-50%) translateY(0) rotate(45deg)"};
  }
  span:nth-child(3) {
    transition: transform 0.5s ease;
    transform: ${props =>
      !props.isOpen
        ? "translateX(-50%) translateY(0)"
        : "translateX(-50%) translateY(0) rotate(-45deg)"};
  }
  span:nth-child(4) {
    transition: transform 0.5s ease;
    transform: ${props =>
      !props.isOpen
        ? "translateX(-50%) translateY(0.5em)"
        : "translateX(-50%) scaleY(0)"};
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">JL</Link>
      </Logo>
      <Menu isOpen={isOpen}>
        <Navigation handleClick={handleClick} />
        <Socials handleClick={handleClick} />
      </Menu>
      <MenuButton onClick={handleClick} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
