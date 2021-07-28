import React from 'react'
import { Link } from 'react-router-dom'
import './Image.css'

function Images(props) {
    return (
        <div className="col-sm-4 margin">
            <img className="image" src={props.image} alt="" width="350px" height="175px"/>
            <div className="align">
                <h4 className="size ">{props.text_1}</h4>
                <h4 className="size">{props.text_2}</h4>
                <Link className="link" to="/readnow">{props.link}</Link>
            </div>
        </div>
    )
}

export default Images
