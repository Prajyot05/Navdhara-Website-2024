import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

function Page1() {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <div className='page1'>
            <nav>
                <h1 className='collegeName'>PIMPRI CHINCHWAD COLLEGE OF ENGINEERING & RESEARCH</h1>
                <p className='collegeDetails'>An ISO 9001:2015 Certified Institute / Computer Engineering | Electronics & Telecommunication Engineering | Civil Engineering | <br /> Mechanical Engineering Programs are NBA Accredited, NAAC A++ Accredited <br /> (Approved by Govt. of Maharashtra, Affiliated to SPPU, Approved by AICTE, DTE CODE - 6822)</p>
            </nav>
            <div className="hamburger">
                <label className='menu'>
                    <input type="checkbox" onChange={handleCheckboxChange}/>
                </label>
                <aside className='sidebar' style={{ display: isChecked ? 'flex' : 'none', animation: isChecked ? 'moveRight ease 0.3s' : 'moveLeft ease 0.1s' }}>
                    <Link to="about-us" spy={true} smooth={true} duration={1000}><h4>About Us</h4></Link>
                    <Link to="gallery" spy={true} smooth={true} duration={1000}><h4>Gallery</h4></Link>
                    <Link to="register" spy={true} smooth={true} duration={1000}><h4>Register</h4></Link>
                </aside>
            </div>
            <div className="logo-container">
                <div className="blur-circle"></div>
                <div className="logo">
                    <img className='logo-img' src="../assets/logo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Page1