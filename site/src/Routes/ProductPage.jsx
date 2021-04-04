import React from "react";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";

export function ProductPage() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const { id } = useParams();
  const getIndividualtask = () => {
    setIsLoading(true);
    Axios.get(`https://fake-server-app-makkardeepak.herokuapp.com/cartdata/${id}`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        setIsError(true);
      })
      .finally(res => {
        setIsLoading(false);
      });
  };
  React.useEffect(() => {
    getIndividualtask();
  }, []);
  const { product_name, description, price, image_url } = data;

    return(
    isLoading ? (
    <div>...loading</div>
  ) : isError ? (
    <div>Something went Wrong</div>
      ) :
          (
    
      <div style={{marginTop:"120px"}}>
        <img src={image_url} />
        <h3>{product_name}</h3>
        <h5>{description}</h5>
        <h3>Rs. {price}</h3>
        <button style={{backgroundColor:"orange",color:"black", fontSize:"30px"}}>Add to Cart</button>
      
    </div>
            )
    )
}
