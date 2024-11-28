import { useEffect, useState } from 'react'
import { Link } from "react-router";
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Navebar from './Navebar';
function App() {
  let {productid} = useParams()
  let [product, setProduct] =useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
         .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
         })
         .catch(err=> console.log(err))
  },[])

  return (

  
    <>
   <Navebar/>
<Container>
      <Row>
        {product.map((product,index)=>{
          return(
            <>
         <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
          <p>{product.price}</p>
        </Card.Text>
        <Link to={`/product-details/${product.id}`}>
        <Button variant="primary">View Product</Button>
        </Link>
      
        <Button variant="danger">Add to Cart</Button>
      </Card.Body>
    </Card>
        
        
        </Col>
            
            
            </>
          )
        })}

      </Row>
    </Container>
  

    </>
  )
}

export default App
