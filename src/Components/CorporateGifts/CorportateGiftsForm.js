import { React, useRef } from 'react';

const CorporateGiftForm = (props) => {
    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const messageInput = useRef(null);

    const newCorporateGiftSubmission = async (event) => {
        event.preventDefault();
        const firstName = firstNameInput.current.value;
        const lastName = lastNameInput.current.value;
        const email = emailInput.current.value;
        const subject = subjectInput.current.value;
        const message = messageInput.current.value;
        const body = JSON.stringify({
            firstName,
            lastName,
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
            const data = await response.json();
            props.updateCorporates([...props.corporates, data])
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
        <h5>Name</h5>
        <form onSubmit={newCorporateGiftSubmission}>
            <label><input type="text" name='firstName' ref={firstNameInput}/>First Name*</label>
            <label><input type="text" name='lastName' ref={lastNameInput}/>Last Name*</label>
            <label><input type="text" name='emial' ref={emailInput}/>Email*</label>
            <label><input type="text" name='subject' ref={subjectInput}/>Subject*</label>
            <label><input type="text" name='message' ref={messageInput}/>Message*</label>
            <input type='submit' value = 'SUBMIT'></input>
        </form>
        </>
    )
}

export default CorporateGiftForm;