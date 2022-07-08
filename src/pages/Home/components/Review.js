import React from 'react'
import '../css/Review.css'
import ReviewImg from '../img/Review/pexels-andrea-piacquadio-resized.png'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { IconContext } from "react-icons";


function Review(){
    return (
        <div className='review-wrapper'>
            <img className='review-img' src={ReviewImg} alt='review-img'/>
            <p className='review-text'>
                "Couldn't have been happier with the outcome of my home. 
                 They finished in a timely manner at an affordable cost."
            </p>
            <div className='review-icons'>
                <IconContext.Provider  value={{color: "rgb(247, 243, 124)", size: "1em"}}> 
                    <BsStarFill /> 
                    <BsStarFill /> 
                    <BsStarFill /> 
                    <BsStarFill />
                    <BsStarHalf />
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Review;
