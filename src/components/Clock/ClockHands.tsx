import React, { useRef, useEffect } from 'react';

interface ClockHandsProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const ClockHands: React.FC<ClockHandsProps> = ({ hours, minutes, seconds }) => {
  const secondHandRef = useRef<HTMLDivElement>(null);
  const minuteHandRef = useRef<HTMLDivElement>(null);
  const hourHandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate rotation angles
    const secondsAngle = seconds * 6; // 6 degrees per second (360 / 60)
    const minutesAngle = minutes * 6 + seconds * 0.1; // 6 degrees per minute + slight adjustment for seconds
    const hoursAngle = hours * 30 + minutes * 0.5; // 30 degrees per hour + slight adjustment for minutes

    // Apply rotations with transforms
    if (secondHandRef.current) {
      secondHandRef.current.style.transform = `rotate(${secondsAngle}deg)`;
    }
    
    if (minuteHandRef.current) {
      minuteHandRef.current.style.transform = `rotate(${minutesAngle}deg)`;
    }
    
    if (hourHandRef.current) {
      hourHandRef.current.style.transform = `rotate(${hoursAngle}deg)`;
    }
  }, [hours, minutes, seconds]);

  return (
    <div className="clock-hands">
      <div ref={hourHandRef} className="hour-hand"></div>
      <div ref={minuteHandRef} className="minute-hand"></div>
      <div ref={secondHandRef} className="second-hand"></div>
    </div>
  );
};

export default ClockHands;