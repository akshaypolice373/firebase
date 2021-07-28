import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import './Head.css'
import { Link } from 'react-router-dom'
import logo from './logo/globalsite_gartner_logo.png'

function Head() {
    return(
        <div className="header_container">   
            <div className="sub_header_container">
                <Link className="search_icon">
                    <SearchIcon />
                    <h6>Search</h6>
                </Link>
                <Link className="help_icon">
                    <HelpOutlineIcon />
                    <h6>help</h6>
                </Link>
                <Link className="login_icon">
                    <PermIdentityIcon />
                    <h6>Log in</h6>
                </Link>
            </div>
            <div className="sub_header_container_2">
                <img className="logo" src={logo} alt=""/>
                <div className="header_links">
                    <Link className="links" to="/solutions">Solutions</Link>
                    <Link className="links" to="/insights">Insights</Link>
                    <Link className="links" to="/whatwedo">What We Do</Link>
                    <Link className="links" to="/conferences">Conferences</Link>
                    <Link className="links" to="/About">About</Link>
                    <Link className="links" to="/careers">Careers</Link>
                </div>
                <button className="Become_A_Client">Become a Client</button>
                <span className="contact_number">+44 (0) 33 3060 8927</span>
            </div>
        </div>
    )
}

export default Head