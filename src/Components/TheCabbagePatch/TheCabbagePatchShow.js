import { React, useState, useEffect } from 'react';
import { Card, CardDeck } from 'react-bootstrap'

function CabbagePatchShow(props) {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const id = props.match.params.id
        try {
            const response = await fetch(`https://happycabbagegifts.herokuapp.com/cabbage_patches${id}`);
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
            {blogs.map((cabbage_patch)=>{
                return (
                    ['White'].map((variant, idx) => (
                            <CardDeck 
                            bg={variant.toLowerCase()}
                            key={idx}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '28rem' }}
                            className="mb-2">
                                <Card>
                                    <Card.Text>{cabbage_patch.date} </Card.Text>
                                    <Card.Text>{cabbage_patch.subject}</Card.Text>
                                    <Card.Text>{cabbage_patch.summery} </Card.Text>
                                    <Card.Text> {cabbage_patch.message} </Card.Text>
                                    <Card.Img variant="bottom" src={cabbage_patch.picture1} />
                                    <Card.Img variant="bottom" src={cabbage_patch.picture2} />                                
                                    <Card.Img variant="bottom" src={cabbage_patch.picture3} />                                
                                    <Card.Img variant="bottom" src={cabbage_patch.picture4} />                                
                                    <Card.Img variant="bottom" src={cabbage_patch.picture5} />                                
                                    <Card.Img variant="bottom" src={cabbage_patch.picture6} />                                
                                    <Card.Img variant="bottom" src={cabbage_patch.picture7} />                                
                                    <Card.Img variant="bottom" src={cabbage_patch.picture8} />                                
                                </Card>  
                            </CardDeck>
                    ))
                );
            })}
        </div>
    )
}

export default CabbagePatchShow;