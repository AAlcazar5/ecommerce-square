import React from 'react';
import Product from '../products/Products';
import hero from '../../headers/icon/hero.jpg';
import GMO from './icon/GMO.png';
import Hemp from './icon/Hemp.png';
import Lab from './icon/Lab.png';
import Money from './icon/Money.png';
import Zero from './icon/Zero.png';

function Home() {
    return (
        <div className="home">
            <div className="heroContainer">
                <div className="image"
                    style={{
                        backgroundImage: `url(${hero})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '600px',
                        width: '800px'
                    }}
                    >
            
                    {/* <img src={hero} alt="" className="hero" /> */}
                    <ul class="column">
                        <li className="welcome">Welcome to Herbs & Potions.</li>
                        <li className="magical">Have a magical time with our CBD products.</li>
                        <li className="shopContainer"><button className="shop">Shop</button></li>
                    </ul>
                </div>
            </div>


            <Product />

            <h1 className="arts">We Specialize In the "Green" Arts</h1>
            <p className="solutions">Escape with our hemp solutions. 
               Tired of sifting through all the complex options in the CBD market? 
               Our ethos is minimalism. 
               We emphasize only high quality products, at a value price point with 
               simplicity so that you can have a magical time with no frills.</p>

            <div className="images_row">
                <img src={GMO} alt="" className="GMO"></img>
                <img src={Hemp} alt="" className="Hemp"></img>
                <img src={Lab} alt="" className="Lab"></img>
                <img src={Money} alt="" className="Money"></img>
                <img src={Zero} alt="" className="Zero"></img>
            </div>

        </div>
    )
}

export default Home;
