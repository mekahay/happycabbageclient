import { React, useState, useEffect } from 'react';
import {  Button, Card, Row } from 'react-bootstrap';

function Cart (props) {



    return(
        <div>
            {props.cartProducts.map((product)=>{
                return (
                    ['Light'].map((variant, idx) => (
                    <Row>
                            <Card 
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'dark'}
                            style={{ width: '28rem' }}
                            className="mb-2">
                            <a href={`/productshow/${product.id}`}/>
                                <Card.Body>
                                    <Card.Title><a href={`/giftshow/${product.id}`}>{product.name}</a></Card.Title>
                                    <Card.Img variant="bottom" src={product.picture1} />                                
                                    <Card.Text>{product.price} <br/> <Button variant="outline-dark" key={product.id} type="submit" value="add" >Add To Cart</Button></Card.Text>
                                </Card.Body>
                            </Card>
                    </Row>
                    ))
                    )
                    
            })}
        </div>
    )
}

export default Cart;