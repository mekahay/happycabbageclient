import { React, useState, useEffect } from 'react';
import {  Button } from 'react-bootstrap';

function Cart (props) {
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
                        <Button key={product.id} type="submit" value="add" onClick={()=>addToCart(product)}>Add To Cart</Button>
                );
            })}
        </div>
    )
}

export default Cart;