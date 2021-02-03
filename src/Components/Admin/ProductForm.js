import { React, useRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';


const ProductForm = (props) => {
    const nameInput = useRef(null);
    const priceInput = useRef(null);
    const descriptionInput = useRef(null);
    const picture1Input = useRef(null);
    const picture2Input = useRef(null);
    const picture3Input = useRef(null);
    const picture4Input = useRef(null);

    const newProduct = async (event) => {
        event.preventDefault();
        const name = nameInput.current.value;
        const price = priceInput.current.value;
        const description = descriptionInput.current.value;
        const picture1 = picture1Input.current.value;
        const picture2 = picture2Input.current.value;
        const picture3 = picture3Input.current.value;
        const picture4 = picture4Input.current.value;
        const body = JSON.stringify({
            name,
            price,
            description,
            picture1,
            picture2,
            picture3,
            picture4
        })
        event.currentTarget.reset()
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            })
            props.history.push('/productsall')
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
        <h1>Add New Product</h1>

        <Form onSubmit={newProduct} className="productForm_form">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Control type="Name" ref={nameInput} placeholder="Name"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPrice">
                    <Form.Control type="Price" ref={priceInput} placeholder="Price"/>
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridDescription">
                <Form.Control type="Description" ref={descriptionInput} placeholder="Description" as='textarea' rows={5}/>
            </Form.Group>
            <Form.Group >
                <Form.Control id="productFormPicture1" ref={picture1Input} placeholder="Image 1" />
                <Form.Control id="productFormPicture2" ref={picture2Input} placeholder="Image 2" />
                <Form.Control id="productFormPicture3" ref={picture3Input} placeholder="Image 3" />
                <Form.Control id="productFormPicture4" ref={picture4Input} placeholder="Image 4" />
            </Form.Group>
            <Button variant="outline-dark" type='submit' value = 'SUBMIT'>Submit</Button>
        </Form>
        </>
    )
}

export default ProductForm