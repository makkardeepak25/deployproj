import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
border:2px solid red;
margin:20px;
width:600px;
margin-top:80px;
/* display:flex; */
place-items:center;
`;

export function Men() {
  const [data, setData] = React.useState([]);
  const getData = () => {
    axios.get("https://fake-server-app-makkardeepak.herokuapp.com/cartdata").then(res => {
      console.log(res.data);
      setData(res.data);
    });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{display:"flex",flexDirection:"column",marginLeft:"20%"}}>
      {data.map(el => {
        return (
           <Link to={`/product/${el.id}`} key={el.id}> <Div>
                <img src={el.image_url}/>
            <h1>{el.product_name}</h1>
            </Div>
            </Link>
        );
      })}
    </div>
  );
}
