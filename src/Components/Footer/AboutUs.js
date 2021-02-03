import React from 'react';
import image from './image-asset.jpeg';
import kateimg from './cabbage10.jpg';
import darcyimg from './cabbage6.jpg';

function About() {
    return(
        <div className="about-div">
        <img className="AboutUs-img" src={image} alt="group"/>
        <div className="about">
        <h2>ABOUT</h2>
        <p className="about-p">Happy Cabbage was founded on the belief that gifts can cement a life moment, memory, gesture, or point in time. Whether you love to give gifts and are out of time or ideas - or the thought totally overwhelms you - we are here to help. Our hope is that we can help you celebrate life’s biggest and smallest moments with a curated gift that will be loved, used, and remembered.</p>

        <p>Darcy & Kate became friends while working at a small experiential marketing agency on the west-side of Chicago. Their clients ranged from Cadillac and Major League Baseball to the Cosmopolitan Hotel and the Chicago Blackhawks. Darcy & Kate bring years of experience, enthusiasm and refinement to each gift crafted. </p> 
        
            
        <hr/>

        <img src={kateimg} alt="katehayes"/>
        <h3>KATE HAYES, CO-FOUNDER </h3>
        <p className="kate-p">Kate originally hails from Seattle, WA, but has called Chicago home for over a decade. She lives in the Bucktown neighborhood with her husband, Josh, son, Stanley and two dogs Wally & Frank. Kate spent the majority of her career at a Tech firm headquartered here in Chicago helping grow the organization to over a thousand employees across the US & Canada. It’s no surprise that her experience has brought her here as she grew up helping with deliveries and sweeping up sawdust at her parents custom wood shop. Starting in their garage, their shop now calls the likes of Nordstrom, Starbucks and REI as some of their clients.</p> 

        <p>Now, a little more about Kate, </p>

        <h6>ASTROLOGICAL SIGN </h6>
        <p>Capricorn</p>
        <h6>GO-TO DRINK </h6>
        <p>Champagne, always champagne.</p>
        <h6>FAVORITE CITY </h6>
        <p>Paris. Cliche? Yes. Magical? Also yes. </p>
        <h6>LAST BOOK YOU READ  </h6>
        <p>Goodnight Moon? My son is obsessed. For me, Live Beautiful. </p>
        <h6>MOST MEMORABLE GIFT YOU’VE RECEIVED  </h6>
        <p>My husband gave me a bracelet when our son was born, I wear it everyday and love how it reminds me of both of them.</p>
        <h6>FAVORITE HAPPY CABBAGE GIFT TO GIVE  </h6>
        <p>I have been dishing out CBD bath bombs left and right. People are carrying a lot of extra stress these days, and it reminds them to take a moment for themselves. For my non-cbd folks, I love to gift our puzzle piece cutting boards. They are so unique as well as useful and end up being peoples go-to kitchen accessory.  </p>
        <h6>QUOTE, MOTTO OR MANTRA</h6>
        <p>‘Friends and good manners will carry you where money won’t go’ -Margaret Walker </p>

        <hr/>

        <img src={darcyimg} alt="darcyjusich"/>

        <h3>DARCY JUSICH, CO-FOUNDER </h3>
        <p className="darcy-p">Darcy was born in Illinois, but lived in London, Sydney, Buenos Aires, and Steamboat Springs, Colorado before permanently settling in Chicago, where she lives with her husband, Frank, and son, Remington. With over a decade of experience in public relations and marketing, Darcy has spearheaded successful local and national media campaigns, strategized high level brand collaborations, secured thought-provoking press placements, and elevated personality profiles.</p> 

        <p>She has also worked with some of the absolute best in the business, from Iron Chefs and ski resorts to exclusive hotels and the fastest sports cars in the world. She specializes in the hospitality industry, which has honed her appreciation for impeccable service and thoughtful touches. </p>

        <h6>ASTROLOGICAL SIGN </h6>
        <p>Pisces</p>
        <h6>FAVORITE CITY</h6>
        <p>Cartagena, Colombia, where my husband and I got married - and where I jumped into a swimming pool in my wedding dress! </p>
        <h6>THEME SONG  </h6>
        <p>Black Betty by Ram Jam and/or Good as Hell by Lizzo  </p>
        <h6>BEST MEAL</h6>
        <p>The tasting menu at Hotel Signum on Salina - a tiny Aeolian Island off the coast of Sicily. But the first thing I need every time I return to Chicago after a long trip is a Portillo’s Italian Beef (wet with sweet and hot). </p>
        <h6>MOST MEMORABLE GIFT YOU’VE RECEIVED  </h6>
        <p>My mom made me a beautiful quilt out of old t-shirts I couldn’t bear to part with - ones from sports teams, vacations, and even a couple of favorite ska bands - and now I can get cozy in a bundle of memories. </p>
        <h6>FAVORITE HAPPY CABBAGE GIFT TO GIVE  </h6>
        <p>I love our “Mother Lover” package for new moms, which includes pampering products and one of my favorite books, Brave New Mama by Vicki Rivard. Gifts for the little one are wonderful, but we should also take time to celebrate the strength and resilience of the woman who brought this new life into the world!</p>
        <h6>QUOTE, MOTTO OR MANTRA</h6>
        <p>I’d rather laugh with the sinners, than cry with the saints - the sinners have much more fun.</p>
        </div>
        </div>
    )
}

export default About;