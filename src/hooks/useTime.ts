import { useState, useEffect } from 'react';

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

export const useTime = (): TimeState => {
  const [time, setTime] = useState<TimeState>(() => {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds()
    };
  });

  useEffect(() => {
    let animationFrameId: number;
    
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
      
      // Request next frame
      animationFrameId = requestAnimationFrame(updateTime);
    };
    
    // Start the animation frame loop
    animationFrameId = requestAnimationFrame(updateTime);
    
    // Clean up by cancelling the animation frame
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return time;
};