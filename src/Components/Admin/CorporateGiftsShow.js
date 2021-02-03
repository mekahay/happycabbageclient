import { React, useState, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap'

function CorporateGiftShow(props) {
    const [corporates, setCorporates] = useState([]);

    const fetchCorporatesGiftResponse = async () => {
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/corporates');
            const json = await response.json();
            setCorporates(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCorporatesGiftResponse();
    }, [])

    return(
        <div>
            {corporates.map((corporate)=>{
                return (
                    ['White'].map((variant, idx) => (
                        <CardDeck 
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '28rem' }}
                        className="mb-2">
                            <Card>
                                <Card.Text> Email: {corporate.email} </Card.Text>
                                <Card.Text>First Name: {corporate.first_name}</Card.Text>
                                <Card.Text>Last Name: {corporate.last_name} </Card.Text>
                                <Card.Text>Subject: {corporate.subject} </Card.Text>
                                <Card.Text>Message: {corporate.message}</Card.Text>                               
                            </Card>  
                        </CardDeck>
                    ))
                );
            })}
        </div>
    )
}

export default CorporateGiftShow;