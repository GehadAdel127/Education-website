import React from 'react'
import Logo from '../images/logo-light.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer" id='footer'>
                <div className="cards">
                    <div className="card" style={{width : '32%'}}>
                        <div className="logo">
                            <img src= {Logo} alt="logo" />
                        </div>
                        <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>
                        <p>Address: Egypt, SHAR</p>
                        <p>Call: +20 12287641</p>
                        <p>Email: hadge7180@gmail.com</p>
                    </div>
                    <div className="card" style={{width : '21%'}}>
                        <h3>Online Platform</h3>
                        <a href="#">About</a>
                        <a href="#">courses</a>
                        <a href="#">instructor</a>
                        <a href="#">events</a>
                        <a href="#">instructor profile</a>
                        <a href="#">purchase guide</a>
                    </div>
                    <div className="card contact">
                        <h3>contacts</h3>
                        <p>Enter your email address to register to our newsletter subscription</p>
                        <div className="email">
                            <input type="email" placeholder='Your Email' />
                            <button>Subscribe</button>
                        </div>
                        <div className="contac">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer