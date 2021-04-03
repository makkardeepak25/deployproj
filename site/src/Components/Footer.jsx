import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  background-color: #798a1a;
  justify-content:center;
  height: 150px;
  padding: 10px;
  font-size: 20px;
  width: 100%;
`;
const Header = styled.h3`
  margin: 15px;
  margin-left: 30px;
  color: #bb4325;
`;



export function Foot() {
  return (
    <Footer style={{ display: "flex" }}>
      <NavLink activeStyle={{ color: "green" }} to={"/openings"}>
        <Header>Careers</Header>
      </NavLink>
      <br />
      <NavLink activeStyle={{ color: "green" }} to={"/faq"}>
        <Header>FAQ</Header>
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
     
   
    </Footer>
  );
}
