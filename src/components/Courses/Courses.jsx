import React from 'react'
import image1 from '../images/course-1.jpg'
import image2 from '../images/course-2.jpg'
import image3 from '../images/course-3.jpg'
import pic from '../images/video-banner.jpg'
import pic2 from '../images/video-shape-1.png'
import './Courses.css'

const Courses = () => {
    return (
        <div>
            <div className="container courses" id='courses'>
                <div className="head1">
                    <h5>POPULAR COURSES</h5>
                </div>
                <div className="head2">
                    <h2>Pick A Course To Get Started</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="image">
                            <img src= {image1} alt="course1" />
                            <div className="duration">3 Weeks</div>
                        </div>
                        <div className="level">beginner</div>
                        <div className="para">
                            <h3>Build Responsive Real- World Websites with HTML and CSS</h3>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>(5.0/7 Rating)</p>
                        </div>
                        <div className="price"><p>$29.00</p></div>
                        <div className="footerCrad">
                            <i class="fa-solid fa-book"></i> <p>lessons</p> | <i class="fa-solid fa-person"></i> <p>20 students</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src= {image2} alt="course1" />
                            <div className="duration">3 Weeks</div>
                        </div>
                        <div className="level">Advanced</div>
                        <div className="para">
                            <h3>Java Programming Masterclass for Software Developers</h3>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>(5.0/7 Rating)</p>
                        </div>
                        <div className="price"><p>$49.00</p></div>
                        <div className="footerCrad">
                            <i class="fa-solid fa-book"></i> <p>lessons</p> | <i classN="fa-solid fa-person"></i> <p>20 students</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src= {image3} alt="course1" />
                            <div className="duration">3 Weeks</div>
                        </div>
                        <div className="level">Intermediate</div>
                        <div className="para">
                            <h3>The Complete Camtasia Course for Content Creators</h3>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p>(5.0/7 Rating)</p>
                        </div>
                        <div className="price"><p>$35.00</p></div>
                        <div className="footerCrad">
                            <i class="fa-solid fa-book"></i> <p>lessons</p> | <i class="fa-solid fa-person"></i> <p>20 students</p>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button>browse my courses <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="section_pic">
                    <img src= {pic2} alt="pic2" />
                    <section className='pic'>
                        <img src= {pic} alt="picture" />
                    </section>
                    <section className='info'>
                        <div className="cards">
                            <div className="card info1">
                                <h2>29.3k</h2>
                                <h5>STUDENT ENROLLED</h5>
                            </div>
                            <div className="card info2">
                                <h2>32.4K</h2>
                                <h5>CLASS COMPLETED</h5>
                            </div>
                            <div className="card info3">
                                <h2>100%</h2>
                                <h5>SATISFACTION RATE</h5>
                            </div>
                            <div className="card info4">
                                <h2>354+</h2>
                                <h5>TOP INSTRUCTORS</h5>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Courses