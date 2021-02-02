import { React, useState, useEffect } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';


function ShopAllProducts (props) {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const[products, setProducts] = useState([]);

    const addToCart = async () =>{
        setCart([...cart, products])
    }

    const fetchGifts = async () => {
        try {
            const response = await fetch('http://localhost:3000/products');
            const json = await response.json();
            setProducts(json);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchGifts();
    }, [])


    return(
        <div>
            {products.map((product)=>{
                return (
                    <>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            </Card.Body>
                            <Card.Footer>{product.price} <br/> <Button key={product.id} type="submit" value="add" onClick={()=>addToCart(product)}>Add To Cart</Button></Card.Footer>
                        </Card>
                    </CardDeck>
                    </>
                );
            })}
        </div>
    )
}

export default ShopAllProducts;