import React from 'react';

function HeroCard({ imageSrc, text }) {
    return (
        <div className="p-1 bg-gradient-to-r w-72 from-blue-500 to-blue-300 rounded-lg">
            <div className="bg-white p-4 rounded-lg">
                <div className="p-1 bg-gradient-to-r w-60 from-blue-500 to-blue-300 rounded-lg">
                    <img src={imageSrc} alt="Card Image" className="rounded-lg" />
                </div>
                <p className="mt-2 text-center text-lg font-extrabold font-inter">{text}</p>
            </div>
        </div>
    );
}

export default HeroCard;