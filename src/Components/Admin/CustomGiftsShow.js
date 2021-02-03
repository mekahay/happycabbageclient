import { React, useState, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap'

function CustomGiftShow(props) {
    const [customs, setCustoms] = useState([]);

    const fetchCustomsGiftResponse = async () => {
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/customs');
            const json = await response.json();
            setCustoms(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCustomsGiftResponse();
    }, [])

    return(
        <div>
            {customs.map((custom)=>{
                return (
                    ['White'].map((variant, idx) => (
                            <CardDeck 
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '28rem' }}
                            className="mb-2">
                                <Card>
                                    <Card.Text> Email: {custom.email} </Card.Text>
                                    <Card.Text>First Name: {custom.first_name}</Card.Text>
                                    <Card.Text>Last Name: {custom.last_name} </Card.Text>
                                    <Card.Text>Subject: {custom.subject} </Card.Text>
                                    <Card.Text>Message: {custom.message}</Card.Text> 
                                    <Card.Text>Price Range: ${custom.price_range} per gift</Card.Text>
                                    <Card.Text>Delivery Date: {custom.delivery_date}</Card.Text>                              
                                </Card>  
                            </CardDeck>
                    ))
                );
            })}
        </div>
    )
}

export default CustomGiftShow;