import React from 'react';
import ClockFace from './ClockFace';
import ClockHands from './ClockHands';
import './Clock.css';

interface ClockProps {
  hours: number;
  minutes: number;
  seconds: number;
  darkMode: boolean;
}

const Clock: React.FC<ClockProps> = ({ hours, minutes, seconds, darkMode }) => {
  return (
    <div className={`clock-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="clock">
        <ClockFace darkMode={darkMode} />
        <ClockHands 
          hours={hours} 
          minutes={minutes} 
          seconds={seconds} 
        />
      </div>
    </div>
  );
};

export default Clock;