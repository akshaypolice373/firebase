import React from 'react'
import { Link } from 'react-router-dom'
import '../Head/Head.css'
import './Foot.css'

function Anchor(props) {
    return(
        <div>
            <Link to={props.to} className={props.classes}>{props.name}</Link>
        </div>
    )
}

export default Anchor