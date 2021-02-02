import React from 'react';
import image from './2019-11-28T21_17_17.502Z.png';

function Home() {
    return(
        <div className="Home">
        <img className="Home-img" src={image} alt="image"/>
        <div className="Home-div">
        <h2>HAND PICKED GIFTS FOR THE PEOPLE YOU LOVE.</h2>
        <p className="Home-p">Happy Cabbage was born from a love of giving.</p> 

        <p className="Home-p">Co-founders, Kate Hayes and Darcy Jusich, are long time friends and nothing makes them happier than making memorable moments for the people in their lives.</p>

        <p className="Home-p">‘Happy Cabbage’ is a phrase that refers to a bit of extra money to be spent on fun, satisfying things and Kate and Darcy keep that in mind when selecting products for every gift - thoughtfully curated items that are beautiful, cheeky, and unique and something that recipients will keep for years to come. Happy Cabbage creates gifts that you will proudly give and happily receive. </p>

        <p className="Home-p">Shop our pre-curated selections or let us help you create a one of a kind gift for a single recipient or an entire organization.</p>
        </div>
        </div>
    )
}

export default Home;