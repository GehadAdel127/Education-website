import React from 'react'
import banner1 from '../images/hero-banner-1.jpg'
import banner2 from '../images/hero-banner-2.jpg'
import './Home.css'


const Home = () => {
    return (
        <div className="home" id='home'>
            <section className='left'>
                <div className="heading">
                    <h1>
                        the best program to <span>enroll</span> for exchange
                    </h1>
                </div>
                <div className="paragraph">
                    <p>you can start your learning journey now
                    and it will be a great honor to help you</p>
                </div>
                <div className="btn">
                    <button>find courses <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </section>
            <section className='right'>
                <img src= {banner1} alt="banner1" id='image1'/>
                <img src= {banner2} alt="banner2" id='image2'/>
            </section>
        </div>
    )
}

export default Home