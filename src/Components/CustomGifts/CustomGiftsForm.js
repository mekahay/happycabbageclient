import { React, useRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const CustomGiftsForm = (props) => {
    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const messageInput = useRef(null);
    const priceRangeInput = useRef(null);
    const deliveryDateInput = useRef(null);

    const newCustomGiftSubmission = async (event) => {
        event.preventDefault();
        const first_name = firstNameInput.current.value;
        const last_name = lastNameInput.current.value;
        const email = emailInput.current.value;
        const subject = subjectInput.current.value;
        const message = messageInput.current.value;
        const price_range = priceRangeInput.current.value;
        const delivery_date = deliveryDateInput.current.value;
        const body = JSON.stringify({
            first_name,
            last_name,
            email,
            subject,
            message,
            price_range,
            delivery_date
        })

        try {
            const response = await fetch('http://localhost:3000/customs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body,
            });
            props.history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <h1>Custom Gifting</h1>
        <p>Whether it be wedding welcome bags, bridesmaid asks, or a custom gift for your partner’s 40th birthday we can help create a gift that feels special - and uniquely YOU. We love working one on one with our clients to curate gifts that are both beautiful and memorable. Please, feel free to fill out the form below to get started on a custom gift.</p>
        <Form onSubmit={newCustomGiftSubmission} className="customForm">
            <Form.Row>
                <Form.Group as={Col} controlId="customFormGirdFirstName">
                    <Form.Control type="firstname" ref={firstNameInput} placeholder="First Name"/>
                </Form.Group>
                <Form.Group as={Col} controlId="customFormGirdLastName">
                    <Form.Control type="lastname" ref={lastNameInput} placeholder="Last Name"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="customFormGirdEmail">
                    <Form.Control type="email" ref={emailInput} placeholder="Email"/>
                </Form.Group>
                <Form.Group as={Col} controlId="customFormGirdSubject">
                    <Form.Control type="subject" ref={subjectInput} placeholder="Subject"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="customFormGirdMessage">
                    <Form.Control type="message" ref={messageInput} placeholder="Message"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="customFormGirdPrice">
                    <Form.Control type="price" ref={priceRangeInput} placeholder="Maximum Price Per Gift"/>
                </Form.Group>
                <Form.Group as={Col} controlId="customFormGirdDeliveryDate">
                    <Form.Control type="deliverydate" ref={deliveryDateInput} placeholder="Delivery Date yyyy/mm//dd"/>
                </Form.Group>
            </Form.Row>
            <Button type='submit' value = 'SUBMIT'>Submit</Button>
        </Form>
        </>
    )
};    

export default CustomGiftsForm;