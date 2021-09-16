import React from 'react'
import './SmallComponent.css'
import * as Datas from '../../Datas/Datas';
import SubTemplate from './SubTemplate';
import Card from '../../Card/Card';
import * as animate from 'react-reveal/';
const  SmallComponent = () => {
    return (
        <>
            <div className="combain-styles">
            {/* <section id="PvcDoor">
            <Card className="SmallComp-form-cards">
            <SubTemplate {...Datas.PvcDoor}/> 
            </Card>
            </section> */}
            <animate.Zoom delay={1200}>
            <section id="Netlon">
            <Card className="SmallComp-form-cards">
            <SubTemplate {...Datas.Netlon}/> 
            </Card>
            </section>
            </animate.Zoom>
            <animate.Zoom delay={1200}>
            <section id="FalseCeiling">
            <Card className="SmallComp-form-cards">
            <SubTemplate {...Datas.FalseCeiling}/> 
            </Card>
            </section>
            </animate.Zoom>
            <animate.Zoom delay={1200}>
            <section id="AluminiumWindow">
            <Card className="SmallComp-form-cards">
            <SubTemplate {...Datas.AluminiumWindow}/> 
            </Card>
            </section>
            </animate.Zoom>
            {/* <Card className="SmallComp-form-cards">
            <SubTemplate {...Datas.PvcDoor}/> 
            </Card> */}
            </div>
            
        </>
    )
}

export default SmallComponent;
