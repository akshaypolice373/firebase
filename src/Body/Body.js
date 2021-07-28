import React from 'react'
import './Body.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom'
import supplychain from './images/promoa-supplychain-315x180.jpg'
import futureofwork from './images/promob-futureofwork-315x180.jpg'
import cloud_migration from './images/CLOUD-MIGRATION-COSTS-350x175.jpeg'
import investin from './images/Invest-in-your-talent-350x175.jpeg'
import tile_tech from './images/tile-technology-emerging-trends-cookieless.jpg'
import marketing from './images/marketing-4-steps-for-building-350x175.jpg'
import fintechs from './images/fintechs_tile.jpg'
import tools_photo from './images/tile-photo-tools.jpg'
import advance_equity from './images/promo-b-advance-equity.jpg'
import covid_19 from './images/promo-a-return-to-work.png'
import future from './images/tile-photo-furtureofwork-header.jpg'
import conference_pic from './images/conference-images-apac.jpg'
import eye_icon from './images/icon-eye-tangerine.png'
import chart_icon from './images/icon-chart-increase-03-tangerine.png'
import target_icon from './images/icon-target-tangerine.png'
import speech_bubble_icon from './images/icon-speech-bubble-02-tangerine.png'
import life_at_gartner from './images/lifeatgartner-corporate-social-responsibility.png'
import pride from './images/lifeatgartner-dei-pride.png'
import navigation from './images/lifeatgartner-we-are-gartner-video.png'
import Images from './Images'
import Icons from './Icons'
import SimpleSelect from './SimpleSelect';



function Body() {

    const text_1 = "Access proven management and technology research any time, 24/7"
    const text_2 = "Make confident decisions using our benchmarks and playbooks"
    const text_3 = "Get one-on-one advice from Gartner experts on your most critical priorities"
    const text_4 = "Connect directly with peers to discuss your key issues and common initiatives"
            

    return (
        <body className="main_container_1">
            <div className="first_banner">
                <div className="body_container">
                    <div className="body_container_1">
                        <div className="line">
                            <h1 className="body_container_1_text">
                                <span className="container_1_text">Protect Your Organization</span>
                                <span className="container_1_text">Against Cybersecurity</span>
                                <span className="container_1_text">Risks</span>
                            </h1>
                            <span className="container_2_text">Stay ahead of ransomware attacks and other threats</span>
                            <div className="read_now">
                                <ArrowForwardIcon /> 
                                <Link to="/" className="container_3_text">Read Now</Link>
                            </div>
                        </div>

                    
                        <div className="main_container_2">
                            <div className="sub_main_container_2">
                                <img className="first_img" src={supplychain} alt="" width="240px" height="137px"/>
                                <span className="sub_sub_main_container">
                                    <Link  className="sub_sub_main_container_text insight" to="/insights">Insights</Link>
                                    <h5 className="sub_container_2_text">Increase Your Supply Chain</h5>
                                    <h5 className="sub_container_2_text">Risk Awarness</h5>
                                    <Link  className="sub_sub_main_container_text explore" to="/explorenow">Explore Now</Link>
                                </span>
                            </div>
                            <div className="sub_main_container_2">
                                <img className="second_img" src={futureofwork} alt="" width="240px" height="137px"/>
                                <span className="sub_sub_main_container">
                                    <Link className="sub_sub_main_container_text insight" to="/insights">Insights</Link>
                                    <h5 className="sub_container_2_text">News Ways To Collaborate</h5>
                                    <h5 className="sub_container_2_text">While Hybrid Working</h5>
                                    <Link className="sub_sub_main_container_text explore" to="/viewresources">View Resources</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_container_3">
                <h2 className="latestInsights">Latest Insights</h2>
                <div className="main_container_3_text">
                    <span >Select your focus:</span>
                     {/* <input id="focus" type="text" placeholder="Choose a topic"/> */}
                     <SimpleSelect/>
                </div>
                <div className="sub_main_container_3 ">
                    <Images image={cloud_migration} text_1="6 Ways Migrations Costs" text_2="Go Off the Rails" link="Read Now"/>
                    <Images image={investin} text_1="A Key Pendamic Lesson" text_2="Learned: Invest in Your Talent" link="Read Now"/>
                    <Images image={tile_tech} text_1="3 Steps fro Marketers to" text_2="Prepare for cookiesless World" link="Read Now"/>
                    <Images image={marketing} text_1="4 Steps for Building an Agile" text_2="Marketing Organization" link="Learn More"/>
                    <Images image={fintechs} text_1="How Financial Services Firms" text_2="Can Effectively Partner With Fintechs" link="Learn More"/>
                    <Images image={tools_photo} text_1="Risk Response Accelerator" text_2="Business Continuity & Organizational Resilience" link="Learn More"/>
                </div>
            </div>
            <div className="main_container_4">
                <h3 className="latestInsights">Resources Centers</h3>
                <div className="sub_main_container_3">
                    <Images image={advance_equity} text_1="Diversity, Equity and Inclusion" text_2="Resource Center" link="Read Now"/>
                    <Images image={covid_19} text_1="Covid 19 Resource Center" text_2="" link="Read Now"/>
                    <Images image={future} text_1="Future of Work Reinvented" text_2="Prepare for cookiesless World" link="Read Now"/>
                </div>
            </div>
            <div className="main_container_5 ">
                <div className="sub_main_container_5_1">
                    <h2 className="main_container_text_1">Experience Gartner </h2>
                    <h2 className="main_container_text_1">Conferences</h2>
                    <span className='main_container_text_2'>
                        <p>Master your role, transform your business <br/> 
                            and tap into an unsurpassed peer network<br/> 
                            through our world-leading virtual and in-<br/>
                            person conference series.
                         </p>
                    </span>
                    <button className="conference_btn" type="submit">View Conferences</button>
                </div>
                <div className="sub_main_container_5_2">
                    <img id="conference_image" src={conference_pic} alt=""/>
                </div>
            </div>
            <div className="main_container_6">
                <h2 className="main_container_6_text_1">Gain the insights, advice and tools to achieve<br/> your mission-critical priorities</h2>
                <p className="main_container_6_text_2">As disruption unfolds, you need proven guidance more than ever</p>
                <div className="icons">
                    <Icons image={eye_icon} text={text_1}/>
                    <Icons image={chart_icon} text={text_2}/>
                    <Icons image={target_icon} text={text_3}/>
                    <Icons image={speech_bubble_icon} text={text_4}/>
                </div>
                <h2 className="main_container_6_text_3"> Talk to a Gartner Expert Today</h2> 
                <button className="expert_button">Contact Us</button>   
            </div>
            <div className="main_container_7">
                <h3 className="main_container_7_text">Life At Gartner</h3>
                <div className="sub_main_container_7">
                    <Images image={life_at_gartner} text_1="Gartner 2020 Corporate " text_2="Responsibility Report" link="Read Now"/>
                    <Images image={pride} text_1="Diversity, Equity & Inclusion:" text_2="Pride at Gartner" link="Watch Video"/>
                    <Images image={navigation} text_1="We are gartner: Navigating a" text_2="New Normal" link="Watch Now"/>
                </div>
            </div>
            <div className="main_container_8">
                    <p>
                        <Link className="text_decoration" to="/diversity">Diversity, Equity and Inclusion Resource Center: </Link>
                        Embed greater DEI in your leadership and organization
                        
                    </p>
            </div>
            <div className="main_container_9">
                <h1 className="main_container_9_text_1">
                    Gartner is a trusted advisor and an objective resource for more than 14,000 enterprises in 100+ countries.
                </h1>
                <p className="main_container_9_text_2">
                    Learn more about how we can help you achieve your mission-critical priorities.
                </p>
                <button className="ton">Become a Client</button>
            </div>
        </body>
    )
}

export default Body
