import React from 'react';
import Card from '../Card/Card';
import './TitleCard.css';
const TitleCard = (props) => {
    return (
        <>
        <Card className="SmallComp-form-cards title-card-content ">
            <img className="img-size" src={`${props.img}`} 
            alt="Title"
            />
            <div className="top-line tile-card-line">{props.title}</div>
        </Card>
            
        </>
    )
}

export default TitleCard
