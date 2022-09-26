import React from 'react';
import { RatingStar } from "rating-star";
const StarComponent = (props) => {

    return (
        <>
       
            <RatingStar
                maxScore={5}
                id="123"
                rating={props.star}                
            // onRatingChange={handleRating}
            />
          
        </>
    )
}
export default StarComponent;
