import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import imgAvatar from "../images/avatar.jpg";

const NavbarWrapperStyle = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .avatar {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid var(--bgPrimary);
    padding: 2rem 0;
    display: block;
    text-align: center;
    .img {
      width: 15rem;
      height: 20rem;
      padding: 1rem;
      border-radius: 150%;
      box-shadow: 0 0 20px 8px var(--bgGrey) inset;
      object-fit: cover;
    }
  }
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem 0;
    width: 100%;
    text-align: center;
    .link {
      color: var(--colorBrand);
      font-size: 2rem;
      padding: 1rem 0;
      text-transform: capitalize;
      width: 100%;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--bgPrimary);
        width: 100%;
        height: 100%;
        z-index: -1;
        clip-path: inset(0 100% 0 0);
        transition: 0.5s linear;
      }
      &:hover::after {
        clip-path: inset(0);
      }
    }
    .active {
      background-color: var(--bgPrimary);
    }
  }
  .footer {
    color: white;
    font-size: 1.4rem;
    border-top: 1px solid var(--colorPrimary);
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    .link {
      color: var(--colorBrand);
      font-size: inherit;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapperStyle>
      <figure className="avatar">
        <img src={imgAvatar} alt="avatar" className="img" />
      </figure>
      <nav className="nav">
        <NavLink activeClassName="active" className="link" to="/" exact>
          home
        </NavLink>
        <NavLink className="link" to="/about" exact>
          about
        </NavLink>
        <NavLink className="link" to="/contact" exact>
          contact
        </NavLink>
        <NavLink className="link" to="/portfolio" exact>
          portfolio
        </NavLink>
      </nav>
      <footer className="footer">
        <span className="text">&copy; 2021. A product of team </span>
        <a
          href="https://github.com/mistersakil/"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Octapia.
        </a>
      </footer>
    </NavbarWrapperStyle>
  );
};

export default Navbar;
