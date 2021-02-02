import { React, useState, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function AllProducts (props) {
    const[products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/products');
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
            {products.map((product)=>{
                return (
                    ['Dark'].map((variant, idx) => (
                            <CardDeck 
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '28rem' }}
                            className="mb-2">
                                <Card>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text> {product.price} </Card.Text>
                                    <Card.Text> {product.description}</Card.Text>
                                    <Card.Img variant="bottom" src="holder.js/100px180" />                                
                                </Card>  
                            </CardDeck>
                    ))
                );
            })}
        </div>
    )
}

export default AllProducts;