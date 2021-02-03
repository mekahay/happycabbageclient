import React from 'react'
import {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, Card, Button, CardDeck } from 'react-bootstrap'


function SearchProductsCategory () {
    const [products, setProducts] = useState([]);


    const searchCategory = async (query) => {
        // console.log('hi')

                try {
                    const response = await fetch(`https://happycabbagegifts.herokuapp.com/products/search?p=${query}`, {
                        method: 'GET',
                        headers: {'content-type': 'application/json'}
                    })
                    const data = await response.json();
                    setProducts(data);
                    console.log(data)
                    // debugger;
                } catch (error) {
                    console.error(error)
                }
    }
    
        useEffect(() => {

        }, []);
    return(
<>
    <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
            Search Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={() => searchCategory('children')}>children</Dropdown.Item>
            <Dropdown.Item onClick={() => searchCategory('new baby')}>new baby</Dropdown.Item>
            {/* <Dropdown.Item onClick={() => searchCategory('heartbroken')}>Heartbroken</Dropdown.Item> */}
        </Dropdown.Menu>
    </Dropdown>

</>
)

}
export default SearchProductsCategory;