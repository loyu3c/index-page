
import React from 'react';
import { Sun, Moon, Zap, Leaf, Coffee } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-full border border-gray-200 dark:border-gray-700 transition-colors">
      <button
        onClick={() => onThemeChange(Theme.LIGHT)}
        className={`p-1.5 rounded-full transition-all ${currentTheme === Theme.LIGHT ? 'bg-white shadow-sm text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}
        title="明亮模式"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => onThemeChange(Theme.DARK)}
        className={`p-1.5 rounded-full transition-all ${currentTheme === Theme.DARK ? 'bg-gray-700 shadow-sm text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
        title="深色模式"
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => onThemeChange(Theme.CYBER)}
        className={`p-1.5 rounded-full transition-all ${currentTheme === Theme.CYBER ? 'bg-indigo-600 shadow-sm text-pink-400' : 'text-gray-400 hover:text-indigo-400'}`}
        title="賽博龐克"
      >
        <Zap size={16} />
      </button>
      <button
        onClick={() => onThemeChange(Theme.EMERALD)}
        className={`p-1.5 rounded-full transition-all ${currentTheme === Theme.EMERALD ? 'bg-emerald-600 shadow-sm text-emerald-100' : 'text-gray-400 hover:text-emerald-500'}`}
        title="森林綠意"
      >
        <Leaf size={16} />
      </button>
      <button
        onClick={() => onThemeChange(Theme.RETRO)}
        className={`p-1.5 rounded-full transition-all ${currentTheme === Theme.RETRO ? 'bg-orange-200 shadow-sm text-orange-800' : 'text-gray-400 hover:text-orange-600'}`}
        title="復古經典"
      >
        <Coffee size={16} />
      </button>
    </div>
  );
};

export default ThemeToggle;
