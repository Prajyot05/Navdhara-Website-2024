import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

{/* <div><script src=https://widget.konfhub.com/widget.js button_id="btn_f19825176d91"></script></div> */}
{/* <div><script src=https://widget.konfhub.com/widget.js button_id="btn_67337f46aab4"></script></div> */}

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="location">
          <h2>Location <img src="../assets/location_logo.svg" alt="" /></h2>
          <h3><a target='_blank' href="https://www.google.com/maps/place/Pimpri+Chinchwad+College+Of+Engineering+%26+Research,+Ravet,+Pimpri-Chinchwad,+Maharashtra+412101/@18.6514033,73.7453516,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2ba0236e62d6d:0xaf82683765815de9!8m2!3d18.6510284!4d73.7452945!16s%2Fg%2F11qs96sn5y?entry=ttu">Pimpri Chinchwad College of Engineering and Research Pune, Plot No. B, Sector no. 110, Gate no.1, Laxminagar, Ravet, Haveli, Pune - 412101.</a></h3>
        </div>
          <div className="contact">
              <h4>Student Coordinators:</h4>
              <h5>Yash Urade: +91 7249591566</h5>
              <h5>Akshat Shrivastava (Technical): +91 9205267201</h5>
              <h5>Aryan Waghmare: +91 8983002030</h5>
              <h5>Rupam Agrawal: +91 8237675364</h5>
          </div>
          <div className="footer-social">
            <h4>Connect with Us:</h4>
            <a target='_blank' href='https://www.instagram.com/navdhara__.2024/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D' className="fa-logo"><FontAwesomeIcon icon={faInstagram} /></a>
            <a target='_blank' href='https://www.youtube.com/channel/UCy8yneU3dnqdAP9a-ZPq3ug' className="fa-logo"><FontAwesomeIcon icon={faYoutube} /></a>
            <a target='_blank' href='navdhara2024@gmail.com' className="fa-logo"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
          <div className="love">
            Made by Team Navdhara with 💛
          </div>
        </div>
        {/* <div className="location">
            <h3><a target='_blank' href="https://www.google.com/maps/place/Pimpri+Chinchwad+College+Of+Engineering+%26+Research,+Ravet,+Pimpri-Chinchwad,+Maharashtra+412101/@18.6514033,73.7453516,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2ba0236e62d6d:0xaf82683765815de9!8m2!3d18.6510284!4d73.7452945!16s%2Fg%2F11qs96sn5y?entry=ttu">Pimpri Chinchwad College of Engineering and Research Pune, Plot No. B, Sector no. 110, Gate no.1, Laxminagar, Ravet, Haveli, Pune - 412101.</a></h3>
            <h2 style={{marginTop: '0.5rem'}}>Instagram <img src="../assets/instagram.png" alt="" /></h2>
            <h3><a href="https://www.instagram.com/navdhara__.2024/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D" target='_blank'>Click Here</a></h3>
            <h2 style={{paddingTop: '1rem'}}>Email:</h2>
            <h3 style={{fontSize: '0.9rem'}}>navdhara2024@gmail.com</h3>
        </div>
         */}
    </div>
  )
}

export default Footer