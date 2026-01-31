import React, { useState } from 'react';
import Character from './components/Character';
import PixelButton from './components/PixelButton';
import rose from './assets/flower.png';

const App = () => {
  const [step, setStep] = useState(0);
  const [characterEmotion, setCharacterEmotion] = useState('neutral');
  const [noBtnPosition, setNoBtnPosition] = useState({});
  const [bgInfo, setBgInfo] = useState({ color: 'var(--bg-color)' });

  const backgrounds = [
    '#ffe4e1', // Step 0
    '#e0ffe0', // Step 1
    '#fff0f5', // Step 2 (Location)
    '#ff69b4'  // Step 3 (Success - handled differently)
  ];

  const handleNoHover = () => {
    setCharacterEmotion('sad');
    // Random position within viewport, keeping padding
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    setNoBtnPosition({ position: 'fixed', left: `${Math.max(20, x)}px`, top: `${Math.max(20, y)}px` });
  };

  const handleYes = () => {
    setCharacterEmotion('happy');
    setTimeout(() => {
      if (step < 3) {
        setStep(s => s + 1);
        setCharacterEmotion('neutral');
        setNoBtnPosition({}); // Reset No button
      }
    }, 1000);
  };

  const handleFinalChoice = (choice) => {
    setCharacterEmotion('happy');
    setStep(3);
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: step === 3 ? '#fff' : backgrounds[step],
      transition: 'background-color 1s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative'
    }}>

      {/* Animated Watermark */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        fontSize: '0.9rem',
        fontFamily: 'inherit',
        color: 'rgba(0, 0, 0, 0.3)',
        fontWeight: '600',
        letterSpacing: '1px',
        zIndex: 1000,
        animation: 'watermarkFadeIn 2s ease-in-out, watermarkFloat 3s ease-in-out infinite',
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        built by madhu ❤️
      </div>

      {step < 3 && <Character emotion={characterEmotion} />}

      {step === 0 && (
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '40px', lineHeight: '1.5' }}>
            💗 Will you be my Valentine?
          </h1>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <PixelButton onClick={handleYes}>Yes 💕</PixelButton>
            <PixelButton
              secondary
              style={noBtnPosition}
              onHover={handleNoHover}
              onClick={handleNoHover} // Just in case they click fast
            >
              No 😶
            </PixelButton>
          </div>
        </div>
      )}

      {step === 1 && (
        <div style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '40px', lineHeight: '1.5' }}>
            🌸 Will you go on a date with me?
          </h1>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <PixelButton onClick={handleYes}>Yes!! 🍱</PixelButton>
            <PixelButton
              secondary
              style={noBtnPosition}
              onHover={handleNoHover}
              onClick={handleNoHover}
            >
              No... 🙈
            </PixelButton>
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '40px', lineHeight: '1.5' }}>
            ✨ Where would you like to go?
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', maxWidth: '600px' }}>
            <PixelButton onClick={() => handleFinalChoice('food')}>🍽 Restaurant</PixelButton>
            <PixelButton onClick={() => handleFinalChoice('nature')}>🌿 Nature Walk</PixelButton>
            <PixelButton onClick={() => handleFinalChoice('movie')}>🏍️ Bike Ride</PixelButton>
            <PixelButton onClick={() => handleFinalChoice('surprise')}>🎁 Surprise Me!</PixelButton>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={{ textAlign: 'center', animation: 'popIn 1s' }}>
          <img src={rose} alt="Rose" style={{ width: '200px', marginBottom: '10px', animation: 'spin 5s infinite linear' }} />
          <p style={{ marginBottom: '20px', fontSize: '1rem', color: '#ff69b4' }}>This is for you 😚</p>
          <Character emotion="happy" />
          <h1 style={{ fontSize: '1.8rem', marginTop: '10px', color: '#ff1493' }}>
            🎉 YAY! Love you Forever! I'm so happy!
          </h1>
          <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>see you soon! 💖</p>

          {/* Confetti / Petals can be added here loosely with CSS particles if needed */}
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes popIn { 0% { transform: scale(0); } 80% { transform: scale(1.1); } 100% { transform: scale(1); } }
        @keyframes watermarkFadeIn { 
          from { opacity: 0; transform: translateY(-10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes watermarkFloat { 
          0%, 100% { transform: translateY(0px); } 
          50% { transform: translateY(-5px); } 
        }
        /* No button might need higher z-index if fixed */
      `}</style>
    </div>
  );
};

export default App;
