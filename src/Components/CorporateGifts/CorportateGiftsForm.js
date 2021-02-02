import { React, useRef } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const CorporateGiftForm = (props) => {
    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const messageInput = useRef(null);

    const newCorporateGiftSubmission = async (event) => {
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
            const response = await fetch('http://localhost:3000/corporates', {
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
        <h1>CUSTOM CORPORATE GIFTING</h1>
        <p>From client gifts and employee milestones to product launches and holiday events, let our team take care of every last detail. We work with a number of bespoke vendors to create thoughtful and unique gifts for our partners. We can create branded gifts, including custom boxes, products (from candles to koozies), printed materials, and wax seals - even down to the ribbon. Whether it be gifts for one or for hundreds, we have the full capability to get the job done, while always making it feel personal. Below, we have outlined some of the verticals we have specialized in:</p>
        <h3>CLIENT GIFTING</h3>
        <p>Whether you are looking to jazz up your next sales call or you want to thank a client for re-signing their contract we have you covered. With backgrounds in Tech and PR, we have been the recipients of a lot of gifts that have fallen flat. We want to make sure that when your client thinks of you and your company quality, kindness and care are all top of mind. </p>
        <h3>EMPLOYEE GIFTING</h3>
        <p>Keeping your staff engaged and motivated is more important than ever right now and we have the tools to make sure they feel appreciated. We can help you celebrate milestone events like birthdays, engagements, babies, and work anniversaries, as well as give you the ingredients to make your weekly check-in calls a little more fun. </p>
        <h3>NONPROFIT GIFTING</h3>
        <p>The nonprofit space holds a really special place in our hearts and we have had the privilege to help communicate the mission and mobilize the patrons of a few organizations. We can help coordinate the take away gifts at your annual gala (virtual or in person!) or welcome new board members into the fold and would be honored to help your organization encourage giving through gifting. </p>
        <h3>REAL ESTATE GIFTING</h3>
        <p>We love to help our talented real estate clients welcome clients to their new homes! We curate personalized gifts that reflect your clients’ personalities and homes. Master bath with a new big tub? Enter relaxing bath salts! First time having a big backyard patio? Hello BBQ cookbook and sauces! Our goal is to select and source products that your client will use and cherish. We appreciate how much trust and confidence you have established during the process of buying/selling a clients’ home and we make sure our gifts reflect that. We also love putting together referral gifts for your biggest fans. </p>
        <h3>HOLIDAY GIFTING</h3>
        <p>Let’s lay it out there, no one wants a fruit basket! We can help you craft a unique and fun holiday gift for any number of recipients. We are happy to include branded materials or source unique products to spark some serious holiday joy! </p>
        <p>Ready to get started? Please feel free to fill out the form below & we will reply within twenty-four hours</p>
        <Form onSubmit={newCorporateGiftSubmission} className="corporateForm">
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
                    <Form.Control type="message" ref={messageInput} placeholder="Message"/>
                </Form.Group>
            </Form.Row>
            <Button type='submit' value = 'SUBMIT'>Submit</Button>
        </Form>

        </>
    )
}

export default CorporateGiftForm;