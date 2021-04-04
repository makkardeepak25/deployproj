import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Cart from "../images/cart.png"

const Nav = styled.div`
  display: flex;
  background-color: #050897;
  height: 60px;
  padding: 10px;
  font-size: 20px;
  position: fixed;
  top: 0%;
  width: 100%;
  z-index:100;
`;
const Header = styled.h3`
  margin: 15px;
  margin-left: 30px;
  color: yellowgreen;
`;
const Image = styled.img`
  margin-top: 10px;
  margin-left: 12vw;
  background: red;
  border-radius: 45%;
  width: 40px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 15px;
  margin-left: 40px;
  color: black;
  background: #dddcdc;
  border-radius:10px;
`;
const Button = styled.button`
  width: 200px;
  height: 35px;
  margin: 15px;
  border-radius:10px;
  background: yellowgreen;
`;

export function NavBar() {
  return (
    <Nav style={{ display: "flex" }}>
      <NavLink activeStyle={{ color: "green" }} to={"/home"}>
        <Header>Home</Header>
      </NavLink>
      <br />
      <NavLink activeStyle={{ color: "green" }} to={"/men"}>
        <Header>Men</Header>
      </NavLink>
      <br />
      <NavLink activeStyle={{ color: "green" }} to={"/women"}>
        <Header>Women</Header>
      </NavLink>
      <NavLink activeStyle={{ color: "green" }} to={"/kids"}>
        <Header>Kids</Header>
      </NavLink>
      <br />

      <NavLink activeStyle={{ color: "green" }} to={"/contact"}>
        <Header>Contact</Header>
      </NavLink>
      <br />
      <NavLink activeStyle={{ color: "green" }} to={"/about"}>
        <Header>About</Header>
      </NavLink>
      <br />
      <Input type="text" placeHolder="search" />
      <Button>Search</Button>
      <NavLink to={"/cart"}>
        <Image src={Cart} alt="cart" />
      </NavLink>
      <br />
    </Nav>
  );
}
