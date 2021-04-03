import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Kids from "../images/Kids.jpg";
import Men from "../images/Mens-2.jpg";
import Women from "../images/Womens-2.jpg";
import ban from "../images/sales.JPG"

const Image = styled.img`
  margin: auto;
  margin:0px 70px;
  width:90%;
  &:hover {
    transform:scale(1.02)
  }

`;
const Bann = styled.div`
display:flex;
width:90%;
margin:10px;


`
const Logo = styled.h2`
margin:10px 0px;
font-size:30px;
text-align:center;
`
const Sale = styled.img`
margin-top:80px;
width:100%;
height:400px;
&:hover {
    transform:scale(1.02)
  }
`
export function Banner() {
  return (
    <div>
      <Link to="/sales"><Sale src={ban}/></Link>
      <Logo>Categories</Logo>
      <Bann>
        <Link to="/Kids">
          <Image src={Kids} />
        </Link>
        <Link to="/Men">
          <Image src={Men} />
        </Link>
        <Link to="/Women">
          <Image src={Women} />
        </Link>
      </Bann>
    </div>
  );
}
