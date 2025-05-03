import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import ThemeToggle from './components/ThemeToggle';
import DigitalDisplay from './components/DigitalDisplay';
import { useTime } from './hooks/useTime';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { hours, minutes, seconds } = useTime();

  useEffect(() => {
    // Update body class for global theme styling
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-xl w-full">
        <div className="relative mb-4 flex justify-end">
          <ThemeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        </div>
        <div className="flex flex-col items-center">
          <Clock 
            hours={hours} 
            minutes={minutes} 
            seconds={seconds} 
            darkMode={darkMode} 
          />
          <div className="mt-8">
            <DigitalDisplay 
              hours={hours} 
              minutes={minutes} 
              seconds={seconds} 
              darkMode={darkMode} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;