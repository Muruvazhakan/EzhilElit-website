import React from 'react'
import Card from '../Card/Card';

const DisplayCount = (props) => {
    return (
        <>
            <Card className="          
             top-card 
            top-card-style">
                 {props.datas.Image_Name}
            </Card>
        </>
    )
}

export default DisplayCount;