import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const Register = () => {
  const vantaRef = useRef(null);

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
        scaleMobile: 1.00,
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
    <div id="register" className='register' ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
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
                        <h4><span>Team: </span>1 - 6 Members</h4>
                    </div>
                    <div className="register-button-container">
                        <button className='register-btn'>Register</button>
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
                    <div className="register-button-container">
                        <button className='register-btn'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Register;
