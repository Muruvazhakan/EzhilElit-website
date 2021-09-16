import React from 'react'
import Card from '../Card/Card';
import * as Datas from '../Datas/Datas'
import './Why_PVC.css';
import Flash from 'react-reveal/Flash';
const My_Site = (props) => {

    return (
        <>
           
                <div className="top-line why_pvc_head site_bg">                  
                          
                <div className="sitetext-font">Why JRE ? </div>
                    <div className="why_pvc_div-style">
                    <Flash delay={3200}>
                        {Datas.my_icons.map(icons => (
                            <Card className="my-site-card" >
                                <img
                                    key={icons.Name}
                                    className="site_img-style"
                                    alt="My Site"
                                    src={icons.Url} />
                                
                                <h5 className="icon-title">{icons.Title}</h5>   
                                {/* <div>{icons.Title}</div> */}
                            </Card>
                        ))}
                          </Flash>
                    </div>
                </div>
           
        </>
    )
}

export default My_Site;