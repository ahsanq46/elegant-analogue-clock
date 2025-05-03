import React from 'react';

interface DigitalDisplayProps {
  hours: number;
  minutes: number;
  seconds: number;
  darkMode: boolean;
}

const DigitalDisplay: React.FC<DigitalDisplayProps> = ({ hours, minutes, seconds, darkMode }) => {
  // Format time to ensure leading zeros
  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12; // Convert to 12-hour format

  return (
    <div 
      className={`text-center p-4 rounded-2xl backdrop-blur-sm transition-all duration-500 ${
        darkMode 
          ? 'bg-gray-800/20 text-gray-100' 
          : 'bg-white/20 text-gray-800'
      }`}
    >
      <div className="text-4xl font-mono tracking-wider transition-colors duration-500 font-light">
        <span className="transition-colors duration-300 hover:text-blue-500">{formatTime(displayHours)}</span>
        <span className="mx-1 animate-pulse opacity-50">:</span>
        <span className="transition-colors duration-300 hover:text-blue-500">{formatTime(minutes)}</span>
        <span className="mx-1 animate-pulse opacity-50">:</span>
        <span className="transition-colors duration-300 hover:text-blue-500">{formatTime(seconds)}</span>
        <span className="ml-3 text-xl font-semibold tracking-normal">{ampm}</span>
      </div>
      <div className={`mt-2 text-sm font-medium tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {new Date().toLocaleDateString(undefined, { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>
  );
};

export default DigitalDisplay;