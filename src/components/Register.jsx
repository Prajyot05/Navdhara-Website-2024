import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import BasicModal from './Modal';
import { Button } from '@mui/material';

const Register = () => {
  const vantaRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    let vantaEffect;
    if (vantaRef.current) {
      vantaEffect = BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.20,
        backgroundColor: 0x111111,
        color2: 0xffa400,
        quantity: 3.00
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div id="register" className='register' ref={vantaRef}>
        <h1>Register</h1>
        <div className="cards">
            <div className="card">
                <div className="glass"></div>
                <div className="card-content">
                    <div className="card-title">
                        {/* <img src="../assets/poster_presentation.jpeg" alt="" /> */}
                        <h3>Poster Presentation</h3>
                    </div>
                    <div className="card-desc">
                        <h4><span>Criteria: </span>FE Students Batch(2023 - 2024)</h4>
                        <h4><span>Fees: </span>₹99/-</h4>
                        <h4><span>Team: </span>1 - 3 Members</h4>
                    </div>
                    <div className="register-button-container" onClick={openModal}>
                        {/* <BasicModal isModalOpen={isModalOpen} closeModal={closeModal} /> */}
                        <BasicModal ticket={18079} />
                        
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="glass"></div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>Project Competition</h3>
                    </div>
                    <div className="card-desc">
                        <h4><span>Criteria: </span>FE Students Batch(2023 - 2024)</h4>
                        <h4><span>Fees: </span>₹199/-</h4>
                        <h4><span>Team: </span>1 - 6 Members</h4>
                    </div>
                    {/* <KonfHubButton /> */}
                    <div className="register-button-container">
                      <BasicModal ticket={18080} />
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="hostel-note">
          <span>One-Day Stay Facility Available:</span> We are offering a one-day hostel accommodation at your own expense, providing a convenient and comfortable option for students visiting from distant locations.
        </div> */}
    </div>
  );
};

export default Register;
