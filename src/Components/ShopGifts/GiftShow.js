import React from 'react'
import {useState, useEffect } from 'react';
import { Card, Carousel } from 'react-bootstrap';

function GiftShow(props) {
    const [product, setProduct] = useState({})

    const fetchProduct = async () => {
        const id = props.match.params.id
        try {
            const response = await fetch(`https://happycabbagegifts.herokuapp.com/products/${id}`)
            const json = await response.json()
            setProduct(json)
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [])

    return(
        <>
            <Card key={product.id}>
            <Carousel>
                <Carousel.Item>
                    <img src={product.picture1}  width={800} height={1000} alt="800x1000"  alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={product.picture2} width={800} height={1000} alt="800x1000"  alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={product.picture3} width={800} height={1000} alt="800x1000"  alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={product.picture4} width={800} height={1000} alt="800x1000"  alt="Fourth slide"/>
                </Carousel.Item>
            </Carousel>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text> {product.description}</Card.Text>
                <Card.Text>{product.price} </Card.Text>
            </Card>
            
        </>
    )

};
export default GiftShow;