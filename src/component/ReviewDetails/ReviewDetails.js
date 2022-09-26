import React from 'react';
import Card from '../Card/Card';
import StarComponent from '../StarComponent/StarComponent';

const ReviewDetails = ({ props }) => {
   
    return (
        <Card className='review-card'>
            <div className='review-card-container'>
                <img class="details-styles" src={props.reviewAuthorImage} />
                <h5 class="details-styles">{props.reviewAuthor}</h5>
                {props.reviewText == 'Only rating provided.' ? 
                null :
                    <div class="details-styles-p">{props.reviewText}</div>}
              
                {/* <small class="details-styles" >{props.reviewRating}</small> */}
                <StarComponent star={props.reviewRating}/>
                <div>
                <small class="details-styles" >{props.reviewDate}</small>
                </div>

            </div>
        </Card>
    );
};

export default ReviewDetails;