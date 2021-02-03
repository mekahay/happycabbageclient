import { React, useState, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import Cart from './Cart';
// import SearchProductsCategory from './Search'


function ShopAllProducts (props) {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const[products, setProducts] = useState([]);
    const[toggle, setToggle] = useState(false);

    const addToCart = async (product) =>{
        setCart([...cart, product])
    }
    const toggleCart = () => {
        setToggle(!toggle)
    }

    const fetchGifts = async () => {
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/products');
            const json = await response.json();
            setProducts(json);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchGifts();
    }, [])



    return (
        <>
            <Button variant="outline-dark" onClick={toggleCart}> {toggle ? 'Back to Shop All' : 'Cart'} </Button>
                <hr/>
                <div>
                    <Row className="cartbutton">
                        { toggle ?  <Cart cartProducts={cart}/> : 
                        products.map((product) => {
                            return (
                                ['Light'].map((variant, idx) => (
                                    <Card 
                                        bg={variant.toLowerCase()}
                                        key={idx}
                                        text={variant.toLowerCase() === 'dark'}
                                        style={{ width: '28rem' }}
                                        className="mb-2">
                                        <a href={`/productshow/${product.id}`}/>
                                            <Card.Body>
                                                <Card.Title><a href={`/giftshow/${product.id}`}>{product.name}</a></Card.Title>
                                                <Card.Text> ${product.price} </Card.Text>
                                                <Card.Img variant="bottom" src={product.picture1} />                                
                                                <Card.Text>
                                                <hr/>
                                                <Button 
                                                variant="outline-dark" 
                                                key={product.id} 
                                                type="submit" 
                                                value="add" 
                                                onClick={()=>addToCart(product)}>
                                                Add To Cart</Button>
                                                </Card.Text>
                                            </Card.Body>
                                    </Card>
                                ))
                            );
                        })}
                    </Row>
                </div>
        </>
    );
}

export default ShopAllProducts;