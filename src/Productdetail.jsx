import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import Navebar from './Navebar';


function Productdetail() {
     let productid = useParams()
     console.log(productid)
let [itemdetails, setItemdetails] =useState({})
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${productid.product_id}`)
         .then((res)=>{
              console.log(res.data)
              setItemdetails(res.data)
         })
         .catch(err=>console.log(err))
})
  return (

   <>
    <Navebar/>
   <Container>
     <Row>

     <img src = {itemdetails.image}style={{width:"300px"}} />
     <h1>{itemdetails.title}</h1>
     <p>{itemdetails.description}</p>
     <p>$:{itemdetails.price}</p>
     <Button variant="primary">Proceed</Button>
     </Row>
 
   
   </Container>
    
   </>
  )
}

export default Productdetail