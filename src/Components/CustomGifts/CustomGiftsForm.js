import { React, useRef } from 'react';

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
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;
        const email = emailInput.current.value;
        const subject = subjectInput.current.value;
        const message = messageInput.current.value;
        const priceRange = priceRangeInput.current.value;
        const deliveryDate = deliveryDateInput.current.value;
        const body = JSON.stringify({
            firstName,
            lastName,
            email,
            subject,
            message,
            priceRange,
            deliveryDate
        })

        try {
            const response = await fetch('http://localhost:3000/customs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/kson' },
                body: body,
            });
            const data = await response.json();
            props.updateCustoms([...props.customs, data])
            props.history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <h1>Custom Gifting</h1>
        <p>Whether it be wedding welcome bags, bridesmaid asks, or a custom gift for your partner’s 40th birthday we can help create a gift that feels special - and uniquely YOU. We love working one on one with our clients to curate gifts that are both beautiful and memorable. Please, feel free to fill out the form below to get started on a custom gift.</p>
        <h5>Name</h5>
        <form onSubmit={newCustomGiftSubmission}>
            <label><input type="text" name='firstName' ref={firstNameInput}/>First Name*</label>
            <label><input type="text" name='lastName' ref={lastNameInput}/>Last Name*</label>
            <label><input type="text" name='emial' ref={emailInput}/>Email*</label>
            <label><input type="text" name='subject' ref={subjectInput}/>Subject*</label>
            <label><input type="text" name='message' ref={messageInput}/>Message*</label>
            <label><input type="text" name='priceRange' ref={priceRangeInput}/>Price Range*</label>
            <label><input type="text" name='deliveryDate' ref={deliveryDateInput}/>Delivery Date*</label>
            <input type='submit' value = 'SUBMIT'></input>
        </form>
        </>
    )
};    

export default CustomGiftsForm;