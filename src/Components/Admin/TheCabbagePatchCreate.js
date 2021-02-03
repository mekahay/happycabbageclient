import { React, useRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';


const CabbagePatchForm = (props) => {
    const dateInput = useRef(null);
    const subjectInput = useRef(null);
    const summaryInput = useRef(null);
    const messageInput = useRef(null);
    const picture1Input = useRef(null);
    const picture2Input = useRef(null);
    const picture3Input = useRef(null);
    const picture4Input = useRef(null);
    const picture5Input = useRef(null);
    const picture6Input = useRef(null);
    const picture7Input = useRef(null);
    const picture8Input = useRef(null);


    const newBlogPost = async (event) => {
        event.preventDefault();
        const date = dateInput.current.value;
        const subject = subjectInput.current.value;
        const summery = summaryInput.current.value;
        const message = messageInput.current.value;
        const picture1 = picture1Input.current.value;
        const picture2 = picture2Input.current.value;
        const picture3 = picture3Input.current.value;
        const picture4 = picture4Input.current.value;
        const picture5 = picture5Input.current.value;
        const picture6 = picture6Input.current.value;
        const picture7 = picture7Input.current.value;
        const picture8 = picture8Input.current.value;

        const body = JSON.stringify({
            date,
            subject,
            summery,
            message,
            picture1,
            picture2,
            picture3,
            picture4,
            picture5,
            picture6,
            picture7,
            picture8
        })
        event.currentTarget.reset()
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/cabbage_patches', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            })
            props.history.push('/thecabbagepatchall')
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
        <h1>Add New Blog Post</h1>

        <Form onSubmit={newBlogPost} className="blogForm">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridDate">
                    <Form.Control type="Date" ref={dateInput} placeholder="Date yyyy/mm/dd"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSubject">
                    <Form.Control type="Subject" ref={subjectInput} placeholder="Subject"/>
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridSummary">
                <Form.Control type="Summary" ref={summaryInput} placeholder="Summary" as="textarea" rows={3}/>
            </Form.Group>
            <Form.Group controlId="formGridMessage">
                <Form.Control type="Message" ref={messageInput} placeholder="Message" as="textarea" rows={5}/>
            </Form.Group>
            <Form.Group >
            <Form.Control id="cabbagePatchPicture1" ref={picture1Input} placeholder="Image 1" />
            <Form.Control id="cabbagePatchPicture2" ref={picture2Input} placeholder="Image 2" />
            <Form.Control id="cabbagePatchPicture3" ref={picture3Input} placeholder="Image 3" />
            <Form.Control id="cabbagePatchPicture4" ref={picture4Input} placeholder="Image 4" />
            <Form.Control id="cabbagePatchPicture5" ref={picture5Input} placeholder="Image 5" />
            <Form.Control id="cabbagePatchPicture6" ref={picture6Input} placeholder="Image 6" />
            <Form.Control id="cabbagePatchPicture7" ref={picture7Input} placeholder="Image 7" />
            <Form.Control id="cabbagePatchPicture8" ref={picture8Input} placeholder="Image 8" />

                
            </Form.Group>
            <Button variant="outline-dark" type='submit' value = 'SUBMIT'>SUBMIT BLOG POST</Button>
        </Form>
        </>
    )
}

export default CabbagePatchForm;