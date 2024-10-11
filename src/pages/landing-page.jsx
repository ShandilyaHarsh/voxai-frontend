// src/components/LandingPage.js
import React, { useRef, useState } from 'react';
import voiceIll1 from '../assets/illustrations/voice-ill.jpg';
import PrimaryButton from '../components/PrimaryButton'; 
import voice from '../assets/voice/voice-landing.mp3'
import HorizontalHeroCard from '../components/HorizontalHeroCard';
import mermaid from '../assets/images/mermaid.jpg'
import '../css/landing-page.css'
import nlq from '../assets/images/nlq.png'
import analysis from '../assets/images/analysis.png'
import AboutTeam from '../components/AboutTeam';

const LandingPage = () => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleImageClick = () => {
        if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause(); // Pause the audio if it's playing
        } else {
            audioRef.current.play(); // Play the audio if it's paused
        }
        setIsPlaying(!isPlaying); // Toggle the playing state
        }
    };


  return (
    <div>
        <div className="hero-1 flex flex-row pb-20 px-32">
            <div className="hero-left w-3/5 m-auto">
                 <div className="hero-header text-5xl font-extrabold font-inter py-4">
                     Perfecting voice AI, one call at a time.
                 </div>
                 <div className="hero-subheader text-2xl font-bold font-inter">
                     Automated call analysis and actionable insights to optimize your Voice AI. 
                 </div>
                 <div className="hero-subheader text-electricBlue text-2xl font-bold font-inter">
                     You make the calls, we will make them better. 
                 </div>
                 <div className='mt-8'><PrimaryButton>Schedule demo</PrimaryButton></div>
            </div>
            <div className="hero-right w-2/5 mr-8">
            <div 
            className="relative pulse-container cursor-pointer" 
            onClick={handleImageClick}
          >
                <img src={voiceIll1} className='m-auto' alt="voice-ill3" />
                <div className="pulse-circle absolute top-36 left-72 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
        <audio ref={audioRef} src={voice} />
        <div className="benefits flex flex-row px-32 pb-8 justify-between">
            
            <HorizontalHeroCard imageSrc={nlq} text={"ChatGPT that answers everything about your calls. "}/>
            <HorizontalHeroCard imageSrc={mermaid} text={"Visualize user journey and pinpoint like never before."}/>
            <HorizontalHeroCard imageSrc={analysis} text={"Actionable insights to track performance improvement."}/>
        </div>
        <div className="team">
            <AboutTeam/>
        </div>
    </div>
  );
};

export default LandingPage;