import { React, useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap'

function CabbagePatchAll(props) {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('https://happycabbagegifts.herokuapp.com/cabbage_patches');
            const json = await response.json();
            setBlogs(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [])

    return(
        <div>
        <Row>
            {blogs.map((cabbage_patch)=>{
                return (
                    ['Light'].map((variant, idx) => (
                        <Card
                        bg={variant.toLowerCase()}
                        key={idx}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '28rem' }}
                        className="mb-2">
                            <Card.Body>
                                <Card.Text>{cabbage_patch.date} </Card.Text>
                                <Card.Text>{cabbage_patch.subject}</Card.Text>
                                <Card.Text>{cabbage_patch.message} </Card.Text>
                                <Card.Img variant="bottom" src={cabbage_patch.picture1} />
                            </Card.Body>  
                        </Card>
                    ))
                );
            })}
        </Row>
        </div>
    )
}

export default CabbagePatchAll;