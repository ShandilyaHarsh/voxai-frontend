import React from 'react';

function HorizontalHeroCard({ imageSrc, text }) {
    return (
        <div className="p-1 bg-gradient-to-r w-96 from-blue-500 to-blue-300 rounded-lg">
            <div className="bg-white p-4 rounded-lg bg-blue">
                <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg">
                    <img src={imageSrc} alt="Card Image" className="rounded-lg" />
                </div>
                <p className="mt-2  text-lg font-extrabold font-inter">{text}</p>
            </div>
        </div>
    );
}

export default HorizontalHeroCard;