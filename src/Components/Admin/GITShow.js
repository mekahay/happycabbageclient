import { React, useState, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap'

function GITShow(props) {
    const [git, setGIT] = useState([]);

    const fetchGITResponse = async () => {
        try {
            const response = await fetch('http://localhost:3000/get_in_touches');
            const json = await response.json();
            setGIT(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGITResponse();
    }, [])

    return(
        <div>
            {git.map((get_in_touch)=>{
                return (
                    ['White'].map((variant, idx) => (
                            <CardDeck 
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '28rem' }}
                            className="mb-2">
                                <Card>
                                    <Card.Text> Email: {get_in_touch.email} </Card.Text>
                                    <Card.Text>First Name: {get_in_touch.first_name}</Card.Text>
                                    <Card.Text>Last Name: {get_in_touch.last_name} </Card.Text>
                                    <Card.Text>Subject: {get_in_touch.subject} </Card.Text>
                                    <Card.Text>Message: {get_in_touch.message}</Card.Text>                           
                                </Card>  
                            </CardDeck>
                    ))
                );
            })}
        </div>
    )
}

export default GITShow;