import { React, useRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const GITForm = (props) => {
    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const messageInput = useRef(null);

    const gITSubmission = async (event) => {
        event.preventDefault();
        const first_name = firstNameInput.current.value;
        const last_name = lastNameInput.current.value;
        const email = emailInput.current.value;
        const subject = subjectInput.current.value;
        const message = messageInput.current.value;
        const body = JSON.stringify({
            first_name,
            last_name,
            email,
            subject,
            message
        })
        event.currentTarget.reset()
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/get_in_touches', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            });
            props.history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <div className="githeader">
        <h1>GET IN TOUCH</h1>
        <h5>PLEASE COMPLETE THE FORM BELOW</h5>
        </div>
        <Form onSubmit={gITSubmission} className="corporateForm">
            <Form.Row>
                <Form.Group as={Col} controlId="customFormGirdCorFirstName">
                    <Form.Control type="firstname" ref={firstNameInput} placeholder="First Name"/>
                </Form.Group>
                <Form.Group as={Col} controlId="customFormGirdCorLastName">
                    <Form.Control type="lastname" ref={lastNameInput} placeholder="Last Name"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="customFormGirdCorEmail">
                    <Form.Control type="email" ref={emailInput} placeholder="Email"/>
                </Form.Group>
                <Form.Group as={Col} controlId="customFormGirdCorSubject">
                    <Form.Control type="subject" ref={subjectInput} placeholder="Subject"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="customFormGirdCorMessage">
                    <Form.Control type="message" ref={messageInput} placeholder="Message" as="textarea" rows={5}/>
                </Form.Group>
            </Form.Row>
            <Button variant="outline-dark" type='submit' value = 'SUBMIT'>SUBMIT</Button>
        </Form>

        </>
    )
}

export default GITForm;