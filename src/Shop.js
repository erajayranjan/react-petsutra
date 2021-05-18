import React  from "react";
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import LinearProgress from '@material-ui/core/LinearProgress';

//AR== THE COMPONENT IS DEMO FOR FETCHING DATA FROM FETCH API AND SPREADING...
//ALSO INCLUDE A PROGRESSBAR ON THE TOP OF THE COMPONENT. 
function Shop() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

   useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result );
        },
       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div> <LinearProgress color="secondary"/>Loading..</div>;
  } else {
    return (
      <table>
      
        {products.map(product => (
          
           
                <tr key={product.id}>  
                  <td className="p-2"> <img src={product.image} alt=""/> </td>
                  <td className="p-2"> {product.title} <br/>
                  <h3 className="text-red-800 font-bold text-2xl pt-2 " >${product.price}</h3></td>
                  
                </tr>
           
        
        ))}
      </table>
    );
  }
}
export default Shop