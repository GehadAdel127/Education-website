import React from 'react'
import blog1 from '../images/blog-1.jpg'
import blog2 from '../images/blog-2.jpg'
import blog3 from '../images/blog-3.jpg'
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="container blog" id='blog'>
                <div className="head1">
                    <h3>Get News With Eduweb</h3>
                </div>
                <div className="head2">
                    <h5>LATEST ARTICLES</h5>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="image"><img src= {blog1} alt="pic1" /></div>
                        <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>
                        <div className="box">
                            <h3>online</h3>
                            <h2>Become A Better Blogger: Content Planning</h2>
                            <div className="date">
                                <i className="fa-solid fa-calendar-days"></i>
                                <p>july12,2024</p>
                                <i className="fa-regular fa-comment"></i>
                                <p>com (9)</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"><img src= {blog2} alt="pic1" /></div>
                        <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>
                        <div className="box">
                            <h3>online</h3>
                            <h2>Become A Better Blogger: Content Planning</h2>
                            <div className="date">
                                <i className="fa-solid fa-calendar-days"></i>
                                <p>july12,2024</p>
                                <i className="fa-regular fa-comment"></i>
                                <p>com (9)</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image"><img src= {blog3} alt="pic1" /></div>
                        <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>
                        <div className="box">
                            <h3>online</h3>
                            <h2>Become A Better Blogger: Content Planning</h2>
                            <div className="date">
                                <i className="fa-solid fa-calendar-days"></i>
                                <p>july12,2024</p>
                                <i className="fa-regular fa-comment"></i>
                                <p>com (9)</p>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog