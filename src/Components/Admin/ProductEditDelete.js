import React from 'react'
import {useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';

function ShowProduct(props) {
    const [product, setProduct] = useState({})
    const editNameInput = useRef(null)
    const editPriceInput = useRef(null)
    const editDescriptionInput = useRef(null)
    const editPicture1Input = useRef(null)
    const editPicture2Input = useRef(null)
    const editPicture3Input = useRef(null)
    const editPicture4Input = useRef(null)

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

    const deleteProduct = async () => {
        const id = props.match.params.id
        try {
            const res = await fetch(`https://happycabbagegifts.herokuapp.com/products/${id}`,{
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json()
            const filterProducts = product.filter((product) => product._id !== data.id);
            setProduct(filterProducts)
        } catch (error) {
            console.error(error)
        }
        props.history.push('/productsall')
    }
    
    const editProduct = async (event) => {
        event.preventDefault();
        const name = editNameInput.current.value;
        const price = editPriceInput.current.value;
        const description = editDescriptionInput.current.value;
        const picture1 = editPicture1Input.current.value;
        const picture2 = editPicture2Input.current.value;
        const picture3 = editPicture3Input.current.value;
        const picture4 = editPicture4Input.current.value;
        const body = JSON.stringify({name, price, description, picture1, picture2, picture3, picture4 });
        const id = props.match.params.id

        try {
            const r = await fetch(`https://happycabbagegifts.herokuapp.com/products/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: body
            });
            const data = await r.json()
            const filterProducts = product.filter((product) => product._id !== data.id);
            setProduct(filterProducts)
        } catch (error) {
            console.error(error)
        }
        props.history.push('/productsall')
    };

    useEffect(() => {
        fetchProduct();
    }, [])

    return(
        <>
        <h3>EDIT & DELETE PRODUCT</h3>
            <Card key={product.id}>
                <Card.Text>{product.name}</Card.Text>
                <Card.Text> {product.price} </Card.Text>
                <Card.Text> {product.description}</Card.Text>
                <Card.Img variant="bottom" src={product.picture1}/>
                <Card.Img variant="bottom" src={product.picture2}/>
                <Card.Img variant="bottom" src={product.picture3}/>
                <Card.Img variant="bottom" src={product.picture4}/>
            </Card>
            <Form >
                <Form.Row>
                    <Form.Group as={Col} controlId="editName">
                        <Form.Control type="name" ref={editNameInput} placeholder="New Name"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="editPrice">
                        <Form.Control type="price" ref={editPriceInput} placeholder="New Price"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="editDescription">
                        <Form.Control type="description" ref={editDescriptionInput} placeholder="New Description" as="textarea" rows={5}/>
                    </Form.Group>
                </Form.Row>
                <Form.Group >
                    <Form.Control id="exampleFormControlEditPicture1" ref={editPicture1Input} placeholder="New Image 1" />
                    <Form.Control id="exampleFormControlEditPicture2" ref={editPicture2Input} placeholder="New Image 2"/>
                    <Form.Control id="exampleFormControlEditPicture3" ref={editPicture3Input} placeholder="New Image 3"/>
                    <Form.Control id="exampleFormControlEditPicture4" ref={editPicture4Input} placeholder="New Image 4"/>
                </Form.Group>
            </Form>
            <Button variant="outline-dark" onClick={editProduct} >SUBMIT</Button>
            <Button variant="outline-dark" onClick={deleteProduct}>DELETE PRODUCT </Button>
        </>
    )

};
export default ShowProduct;