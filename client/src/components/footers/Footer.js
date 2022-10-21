import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div class="container">
            <footer>
                <section class="ft-main">
                    <div class="ft-main-item">
                        <h2 class="ft-title">Have a Magical Time</h2>
                        <p>Here at Herbs & Potions...</p>
                    </div>

                    <div class="ft-main-item">
                        <h2 class="ft-title">About</h2>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/terms">Terms</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div class="ft-main-item">
                        <h2 class="ft-title">Shop Links</h2>
                        <ul>
                            <li><Link to="/detail/606bf1f0d145db700b7fe155">Oil</Link></li>
                            <li><Link to="/detail/606bf3f22d1fca70e4ef0bf5">Edibles</Link></li>
                            <li><Link to="/detail/606bf5922d1fca70e4ef0bf6">Capsules</Link></li>
                            <li><Link to="/detail/606bf9052d1fca70e4ef0bf9">Cream</Link></li>
                            <li><Link to="/detail/606bf9c22d1fca70e4ef0bfa">E-Liquid</Link></li>
                        </ul>
                    </div>
                
                </section>
                
                {/* Footer legal */}
                <section class="ft-legal">
                    <ul class="ft-legal-list">
                    {/* <li><a href="#">Terms &amp; Conditions</a></li> */}
                    <li><a href="#">Privacy Policy</a></li>
                    <li>&copy; 2021 Copyright Herbs & Potions LLC</li>
                    </ul> 
                </section>
            </footer>
        </div>
    )
}

export default Footer;
