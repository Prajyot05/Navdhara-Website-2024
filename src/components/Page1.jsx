import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Page1() {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div className='page1'>
            <nav>
                <div className="nav-left">
                    <img src="../assets/pccoer_logo_2.png" alt="" />
                </div>
                <div className="nav-mid">
                    <p className='pcet'>Pimpri Chinchwad Education Trust's</p>
                    <h1 className='collegeName'>PIMPRI CHINCHWAD COLLEGE OF ENGINEERING & RESEARCH</h1>
                    <p className='collegeDetails'>An ISO 9001:2015 Certified Institute / Computer Engineering | Electronics & Telecommunication Engineering | Civil Engineering | <br /> Mechanical Engineering Programs are NBA Accredited, NAAC A++ Accredited <br /> (Approved by Govt. of Maharashtra, Affiliated to SPPU, Approved by AICTE, DTE CODE - 6822)</p>
                </div>
                <div className="nav-right">
                    <img src="../assets/pccoer_logo.png" alt="" />
                </div>
            </nav>
            <div className="marque">
            <marquee scrollamount="10"><span>IMPORTANT</span>: Event has been postponed to 3rd August.</marquee>
            </div>
            <div className="video-background">
                <video autoPlay muted loop id="bgVideo">
                    <source src="../assets/bgclip.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="below-nav">
                <div className="hamburger">
                    <label className='menu'>
                        <input type="checkbox" onChange={handleCheckboxChange}/>
                    </label>
                    <aside className='sidebar' style={{ display: isChecked ? 'flex' : 'none', animation: isChecked ? 'moveRight ease 0.3s' : 'moveLeft ease 0.1s' }}>
                        <Link to="about-us" spy={true} smooth={true} duration={1000}><h4>About</h4></Link>
                        <Link to="gallery" spy={true} smooth={true} duration={1000}><h4>Gallery</h4></Link>
                        <Link to="register" spy={true} smooth={true} duration={1000}><h4>Register</h4></Link>
                        <Link to="footer" spy={true} smooth={true} duration={1000}><h4>Contact Us</h4></Link>
                    </aside>
                </div>
                <div className="nav-social">
                    <a target='_blank' href='https://www.instagram.com/navdhara__.2024/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D' to='https://www.instagram.com/navdhara__.2024/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D' className="fa-logo"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a target='_blank' href='https://www.youtube.com/channel/UCy8yneU3dnqdAP9a-ZPq3ug' className="fa-logo"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a target='_blank' href='https://mail.google.com/mail/?view=cm&fs=1&to=navdhara2024@gmail.com' className="fa-logo"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
            <div className="logo-container">
                {/* <div className="blur-circle"></div> */}
                <div className="logo">
                    {/* <img className='logo-img' src="../assets/logo.png" alt="" /> */}
                    <img className='logo-img' src="../assets/logo-updated.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Page1