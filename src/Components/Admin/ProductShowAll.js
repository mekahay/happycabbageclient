import { React, useState, useEffect, Link } from 'react';
import { Card, Row } from 'react-bootstrap';

function AllProducts (props) {
    const[products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/products');
            const json = await response.json();
            setProducts(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return(
        <div>
        <Row>
            {products.map((product)=>{
                return (
                    ['Dark'].map((variant, idx) => (
                            <Card 
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '28rem' }}
                            className="mb-2"
                            id={product.id}>
                            <a href={`/productshow/${product.id}`}/>
                                <Card.Body>
                                    <Card.Title><a href={`/productshow/${product.id}`}>{product.name}</a></Card.Title>
                                    <Card.Text> ${product.price} </Card.Text>
                                    <Card.Text> {product.description}</Card.Text>
                                    <Card.Text>{product.category}</Card.Text>
                                    <Card.Img variant="bottom" src={product.picture1} />                                
                                </Card.Body>
                            </Card>
                    ))
                );
            })}
            </Row>
        </div>
    )
}

export default AllProducts;