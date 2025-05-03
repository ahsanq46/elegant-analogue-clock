import React from 'react';

interface ClockFaceProps {
  darkMode: boolean;
}

const ClockFace: React.FC<ClockFaceProps> = ({ darkMode }) => {
  // Generate hour markers (1-12)
  const hourMarkers = Array.from({ length: 12 }, (_, i) => {
    const rotation = `rotate(${i * 30}deg)`;
    return (
      <div 
        key={`hour-${i}`} 
        className="hour-marker" 
        style={{ transform: rotation }}
      >
        <div className="hour-marker-line"></div>
        <span 
          className="hour-number" 
          style={{ transform: `rotate(${-i * 30}deg)` }}
        >
          {i === 0 ? 12 : i}
        </span>
      </div>
    );
  });

  // Generate minute markers (60 positions, but skip where hour markers are)
  const minuteMarkers = Array.from({ length: 60 }, (_, i) => {
    // Skip positions where hour markers are (multiples of 5)
    if (i % 5 === 0) return null;
    
    const rotation = `rotate(${i * 6}deg)`;
    return (
      <div 
        key={`minute-${i}`} 
        className="minute-marker" 
        style={{ transform: rotation }}
      >
        <div className="minute-marker-line"></div>
      </div>
    );
  });

  return (
    <div className="clock-face">
      {/* Clock outer rim and face */}
      <div className="clock-outer-rim"></div>
      <div className="clock-inner-face"></div>
      
      {/* Minute and hour markers */}
      <div className="markers-container">
        {minuteMarkers}
        {hourMarkers}
      </div>
      
      {/* Central pivot point */}
      <div className="center-pivot">
        <div className="center-pivot-inner"></div>
      </div>
    </div>
  );
};

export default ClockFace;