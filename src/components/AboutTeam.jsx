import React from 'react';
import shandi from '../assets/images/shandi.jpg'
import saarth from '../assets/images/saarth.jpg'
import '../css/about-team.css'

const AboutTeam = () => {
  return (
    <div className='mt-20 mb-10'>
        <div className="hero-header text-center mb-10 text-5xl font-extrabold font-inter py-4">
                     Who are we?
                 </div>
      <div class="main">
        <div class="profile-card">
            <div class="img">
                <img src={shandi}/>
            </div>
            <div class="caption">
                <h3>Harsh Shandilya</h3>
                <p> Bits Pilani '23</p>
                <p> 8431263004</p>
            </div>
        </div>
        <div class="profile-card">
            <div class="img">
                <img src={saarth}/>
            </div>
            <div class="caption">
                <h3>Saarth Jhaveri</h3>
                <p>Bits Pilani '23 </p>
                <p>9307827153</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default AboutTeam;
