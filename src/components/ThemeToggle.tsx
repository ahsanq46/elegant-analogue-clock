import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`
        flex items-center justify-center w-14 h-14 rounded-full 
        transition-all duration-500 transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${darkMode 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300 focus:ring-yellow-500' 
          : 'bg-blue-100 hover:bg-blue-200 text-blue-800 focus:ring-blue-500'
        }
        shadow-lg hover:shadow-xl
      `}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun 
          size={24} 
          className="transition-all duration-500 transform hover:rotate-180" 
          strokeWidth={1.5}
        />
      ) : (
        <Moon 
          size={24} 
          className="transition-all duration-500 transform hover:-rotate-12" 
          strokeWidth={1.5}
        />
      )}
    </button>
  );
};

export default ThemeToggle;