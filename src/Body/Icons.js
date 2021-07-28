import React from 'react'
import './Icons.css'

function Icons(props) {
    return (
        <div className="icons ">
                <div className="sub_icons ">
                    <img className="icon_img" src={props.image} alt=""/>
                   
                        <p className="font_size">{props.text}</p>
                    
                </div>
            
        </div>
    )
}

export default Icons