import React from 'react'
import logo from './logo/globalsite_gartner_logo.png'
import { Link } from 'react-router-dom'
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Foot.css'

function Foot() {
    return (
        <div className="footer_container">
            
            <div className="sub_footer_container_1">
                <img className="foot_logo" src={logo} alt=""/>
                
                <div className="foot_links">
                    <Link className="footer_links" to="/about">About</Link>
                    <Link className="footer_links" to="/careers">Careers</Link>
                    <Link className="footer_links" to="/contact">Contact</Link>
                    <Link className="footer_links" to="/gartner_glossary">Gartner Glossary</Link>
                    <Link className="footer_links" to="/newsroom">NewsRoom</Link>
                    <Link className="footer_links" to="/smartner_with_gartner">Smartner With Gartner</Link>
                </div>
                <div className="social_media_links">
                    <Link to="/youtube_link"><YouTubeIcon className="social_media_icons"/></Link>
                    <Link to="/twitter_link"><TwitterIcon className="social_media_icons"/></Link>
                    <Link to="/linkedin_link"><LinkedInIcon className="social_media_icons"/></Link>
                    <Link to="/fracebook_link"><FacebookIcon className="social_media_icons"/></Link>
                    <Link to="/instagram_link"><InstagramIcon className="social_media_icons"/></Link>
                </div>
            </div>
            <div className="sub_footer_container_2">
                <div className="first_column">
                    <div className="main_heading">
                        <span className="footer_header_1">Solutions</span>
                    </div>
                    <div className="sub_heading">
                        <span className="foot_header_2">By Function</span>
                    </div>
                    <Link to="/audit&risk" className="decoration">Audit & Risk</Link>
                    <Link to="/audit&risk" className="decoration" >Customer Service & Support</Link>
                    <Link to="/audit&risk" className="decoration" >Finance</Link>
                    <Link to="/audit&risk" className="decoration" >Human Resources</Link>
                    <Link to="/audit&risk" className="decoration" >Information Technology</Link>
                    <Link to="/audit&risk" className="decoration" >Innovative & Strategy</Link>
                    <Link to="/audit&risk" className="decoration" >Legal & Compliance</Link>
                    <Link to="/audit&risk" className="decoration" >MArketing & Communication</Link>
                    <Link to="/audit&risk" className="decoration" >Product</Link>
                    <Link to="/audit&risk" className="decoration" >Sales</Link>
                    <Link to="/audit&risk" className="decoration" >Supply Chain</Link>
                </div>
                <div className="first_column">
                    <div className="main_heading">
                        <br/>
                    </div>
                    <div className="sub_heading">
                        <span className="foot_header_2">By Industry</span>
                    </div>
                    <Link to="/audit&risk" className="decoration" >Education</Link>
                    <Link to="/audit&risk" className="decoration">Energy & Utilities</Link>
                    <Link to="/audit&risk" className="decoration">Financial Services</Link>
                    <Link to="/audit&risk" className="decoration">Government & Public Sector</Link>
                    <Link to="/audit&risk" className="decoration">Healthcare</Link>
                    <Link to="/audit&risk" className="decoration">Manufacturing</Link>
                    <Link to="/audit&risk" className="decoration">Retail</Link>
                    <Link to="/audit&risk" className="decoration">High Tech & Telecom</Link>
                </div>
                <div className="first_column">
                    <div className="main_heading">
                        <span className="footer_header_1">Insights</span>
                    </div>
                    <div className="sub_heading">
                        <span className="foot_header_2">Featured Insights</span>
                    </div>
                    <Link to="/audit&risk" className="decoration">Benchmarking</Link>
                    <Link to="/audit&risk" className="decoration">Cost Optimization</Link>
                    <Link to="/audit&risk" className="decoration">Gartner Business Quarterly</Link>
                    <Link to="/audit&risk" className="decoration">Strategic Planning</Link>
                    <Link to="/audit&risk" className="decoration">Top Insights</Link>

                </div>
                <div className="first_column">
                    <div className="main_heading">
                        <br/>
                    </div>
                    <div className="sub_heading">
                        <span className="foot_header_2">Resources Centers</span>
                    </div>
                    <Link to="/audit&risk" className="decoration">COVID-19</Link>
                    <Link to="/audit&risk" className="decoration">Diversity, Equity & Inclusion</Link>
                    <Link to="/audit&risk" className="decoration">Reset Your Business Strategy <br/> Amid COVID-19</Link>
                </div>
                <div className="first_column">
                    <div className="main_heading">
                        <span className="footer_header_1">What We Do</span>
                    </div>
                    <Link to="/audit&risk" className="decoration">Research & Advisory</Link>
                    <Link to="/audit&risk" className="decoration">Conference</Link>
                    <Link to="/audit&risk" className="decoration">Consulting</Link>
                    <Link to="/audit&risk" className="decoration">Digital Markets</Link>
                    <Link to="/audit&risk" className="decoration">Peer Insights</Link>
                </div>
            </div>
            <div className="sub_footer_container_3">
                <div className="first_section">
                    <Link className="first_section_text" to="/policies">POLICIES</Link>
                    <Link className="first_section_text" to="/privacy_policy">PRIVACY POLICY</Link>
                    <Link className="first_section_text" to="/terms_to_use">TERMS OF USE</Link>
                    <Link className="first_section_text"to="/inverstor_relations">INVESTOR RELATIONS</Link>
                    <Link className="first_section_text" to="/ombuds">OMBUDS</Link>
                </div>
                <div className="second_section">
                    <p>
                        ©2021 Gartner, Inc. and/or its affiliates. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Foot
