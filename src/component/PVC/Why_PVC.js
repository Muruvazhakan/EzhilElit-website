import React from 'react'
import Card from '../Card/Card';
import * as Datas from '../Datas/Datas'
import './Why_PVC.css';
import Jello from 'react-reveal/Jello';
const Why_PVC = (props) => {

    return (
        <>

            <Card className="
           
             top-card 
            top-card-style">
                  {/* why_pvc_card-style  */}
                <div className="top-line why_pvc_head ">
                <div className="sitetext-font">Why PVC? </div>
                    <div className="why_pvc_div-style">
                    <Jello delay={2500}>
                        {Datas.pvc_icons.map(icons => (
                            <Card className="why_pvc_card-style" >
                                <img
                                    key={icons.Name}
                                    className="why_pvc_img-style"
                                    alt="Why PVCs"
                                    src={icons.url} />
                                   
                            </Card>
                        ))}
                         </Jello>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Why_PVC;