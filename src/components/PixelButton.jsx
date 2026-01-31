import React from 'react';

const PixelButton = ({ onClick, children, secondary, style, onHover }) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        if (onHover) onHover(e);
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
      style={{
        ...style,
        backgroundColor: secondary ? '#fff' : 'var(--primary-color)',
        color: secondary ? 'var(--text-color)' : 'white',
        border: '4px solid #5d4037',
        boxShadow: '4px 4px 0px #5d4037',
        padding: '16px 24px',
        fontSize: '1rem',
        margin: '10px',
        position: style?.position || 'relative',
        transition: 'transform 0.1s, top 0.2s, left 0.2s',
      }}
    >
      {children}
    </button>
  );
};

export default PixelButton;
