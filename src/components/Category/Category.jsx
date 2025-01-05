import React from 'react'
import card_icon1 from '../images/category-1.svg'
import card_icon2 from '../images/category-2.svg'
import card_icon3 from '../images/category-3.svg'
import card_icon4 from '../images/category-4.svg'
import './Category.css'

const Category = () => {
    return (
        <div>
            <div className="container category">
                <div className="head1">
                    <h5>categories</h5>
                </div>
                <div className="head2">
                    <h2>Online <span>Classes</span> For Remote Learning.</h2>
                </div>
                <div className="cards">
                    <div className="card card1">
                        <div className="icon icon1">
                            <img src={card_icon1} alt="icon1"/>
                        </div>
                        <h3>online degree programs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='courses1'>7 courses</p>
                    </div>
                    <div className="card card2">
                    <div className="icon icon2">
                            <img src={card_icon2} alt="icon1"/>
                        </div>                        <h3>non degree programs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='courses2'>5 courses</p>
                    </div>
                    <div className="card card3">
                    <div className="icon icon3">
                            <img src={card_icon3} alt="icon1"/>
                        </div>                        <h3>off campus programs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='courses3'>4 courses</p>
                    </div>
                    <div className="card card4">
                    <div className="icon icon4">
                            <img src={card_icon4} alt="icon1"/>
                    </div>
                        <h3>hybrid distance programs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='courses4'>8 courses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category