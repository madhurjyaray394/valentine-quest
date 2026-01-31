import React from 'react';
import neutral from '../assets/nervous.png';
import happy from '../assets/happy.png';
import sad from '../assets/heartbreak.png';

const Character = ({ emotion }) => {
    let src = neutral;
    if (emotion === 'happy') src = happy;
    if (emotion === 'sad') src = sad;

    return (
        <div style={{
            animation: emotion === 'happy' ? 'bounce-fast 0.5s infinite' : 'bounce 2s infinite ease-in-out',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
            <img
                src={src}
                alt="Character"
                style={{
                    width: '180px',
                    height: '180px',
                    imageRendering: 'pixelated',
                    filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.1))'
                }}
            />
        </div>
    );
};

export default Character;
