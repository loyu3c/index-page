
import React, { useState, useEffect } from 'react';
import { Theme, Project } from './types';
import { PROJECTS } from './constants';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import AiAssistant from './components/AiAssistant';
import { LayoutGrid, Globe, Github, Terminal, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  // 預設使用明亮主題
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const [filter, setFilter] = useState<string>('全部');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'cyber', 'emerald', 'retro');

    // Cyber 與 Emerald 共用深色基礎，確保文字顏色正確
    if (theme === Theme.CYBER || theme === Theme.EMERALD || theme === Theme.DARK) {
      root.classList.add('dark');
      if (theme !== Theme.DARK) root.classList.add(theme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // 排除個人網站（category: 'Website'），僅在作品集顯示 App 與 System
  const portfolioProjects = PROJECTS.filter(p => p.category !== 'Website');

  const filteredProjects = filter === '全部'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === filter);

  // 主題樣式定義
  const getThemeStyles = () => {
    switch (theme) {
      case Theme.CYBER:
        return {
          backgroundColor: '#0a0a12',
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 80%), linear-gradient(rgba(18, 16, 35, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 16, 35, 0.8) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          color: '#e0e7ff'
        };
      case Theme.EMERALD:
        return {
          backgroundColor: '#064e3b',
          backgroundImage: `radial-gradient(circle at top right, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at bottom left, rgba(5, 150, 105, 0.1) 0%, transparent 50%)`,
          color: '#ecfdf5'
        };
      case Theme.RETRO:
        return {
          backgroundColor: '#fdf6e3', // 經典 Solarized Light 背景
          backgroundImage: `url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")`,
          color: '#586e75'
        };
      default:
        return {};
    }
  };

  const categories = ['全部', 'App', 'System'];

  // 根據主題動態決定的主色調
  const primaryColorClass =
    theme === Theme.EMERALD ? 'bg-emerald-600 hover:bg-emerald-700' :
      theme === Theme.RETRO ? 'bg-orange-700 hover:bg-orange-800' :
        'bg-blue-600 hover:bg-blue-700';

  const accentTextClass =
    theme === Theme.EMERALD ? 'text-emerald-400' :
      theme === Theme.RETRO ? 'text-orange-700 font-serif' :
        'text-blue-500';

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${theme === Theme.LIGHT ? 'bg-slate-50 text-slate-900' :
          theme === Theme.RETRO ? 'text-stone-800' :
            'bg-gray-950 text-slate-100'
        }`}
      style={getThemeStyles()}
    >
      {/* Navigation */}
      <nav className={`sticky top-0 z-40 w-full glass ${theme === Theme.RETRO ? 'border-orange-200' : 'dark:border-gray-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${primaryColorClass}`}>
                <Terminal size={18} />
              </div>
              <span className={`text-xl font-bold tracking-tight ${theme === Theme.RETRO ? 'font-serif italic' : ''}`}>Loyu3C Hub</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6 text-sm font-medium">
                <a href="#projects" className={`transition-colors ${accentTextClass}`}>作品集</a>
                <a href="https://github.com/loyu3c" target="_blank" className="hover:opacity-70 transition-colors">GitHub</a>
              </div>
              <ThemeToggle currentTheme={theme} onThemeChange={setTheme} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center md:text-left md:flex items-center justify-between">
            <div className="md:w-2/3">
              <h1 className={`text-4xl md:text-6xl font-extrabold mb-6 tracking-tight ${theme === Theme.RETRO ? 'font-serif' : ''}`}>
                打造 <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === Theme.EMERALD ? 'from-emerald-400 to-teal-500' : 'from-blue-500 to-indigo-600'}`}>高效</span> 與 <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === Theme.RETRO ? 'from-orange-600 to-amber-800' : 'from-pink-500 to-purple-600'}`}>智能</span> 的數位工具
              </h1>
              <p className={`text-lg md:text-xl mb-8 max-w-2xl ${theme === Theme.LIGHT ? 'text-slate-600' : theme === Theme.RETRO ? 'text-stone-600' : 'text-slate-400'}`}>
                專注於 AI 整合應用與實用水電工程解決方案。透過技術轉化複雜流程為簡單的線上體驗。
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://loyu3c.notion.site/"
                  target="_blank"
                  className={`px-8 py-3 text-white rounded-xl font-bold transition-all flex items-center shadow-lg ${primaryColorClass} shadow-blue-500/20`}
                >
                  探索個人網站 <ChevronRight size={20} className="ml-1" />
                </a>
                <a
                  href="#projects"
                  className={`px-8 py-3 bg-white dark:bg-gray-800 border rounded-xl font-bold hover:shadow-md transition-all flex items-center ${theme === Theme.RETRO ? 'border-orange-200 text-orange-900 bg-orange-50' : 'border-gray-200 dark:border-gray-700'
                    }`}
                >
                  查看開發作品
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/3 relative">
              <div className={`w-64 h-64 rounded-full blur-3xl absolute -top-10 -right-10 animate-pulse ${theme === Theme.EMERALD ? 'bg-emerald-500/20' : 'bg-blue-500/20'}`}></div>
              <div className={`relative glass p-6 rounded-3xl rotate-3 scale-110 shadow-2xl border-white/50 ${theme === Theme.RETRO ? 'bg-amber-50/80 border-orange-100' : ''}`}>
                <LayoutGrid size={48} className={theme === Theme.EMERALD ? 'text-emerald-500' : theme === Theme.RETRO ? 'text-orange-700' : 'text-blue-500'} mb-4 />
                <div className="space-y-3">
                  <div className={`h-4 w-32 rounded-full ${theme === Theme.RETRO ? 'bg-orange-100' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`h-4 w-48 rounded-full ${theme === Theme.RETRO ? 'bg-orange-100' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                  <div className={`h-4 w-24 rounded-full ${theme === Theme.RETRO ? 'bg-orange-100' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Badges */}
      <section className={`py-12 border-y ${theme === Theme.RETRO ? 'border-orange-100 bg-orange-50/30' : 'border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/20'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-center">
          <div>
            <div className={`text-3xl font-bold ${theme === Theme.EMERALD ? 'text-emerald-500' : theme === Theme.RETRO ? 'text-orange-800' : 'text-blue-600'}`}>3+</div>
            <div className="text-sm opacity-60 text-gray-500">上線作品</div>
          </div>
          <div>
            <div className={`text-3xl font-bold ${theme === Theme.EMERALD ? 'text-teal-500' : theme === Theme.RETRO ? 'text-stone-700' : 'text-indigo-600'}`}>AI</div>
            <div className="text-sm opacity-60 text-gray-500">驅動研發</div>
          </div>
          <div>
            <div className={`text-3xl font-bold ${theme === Theme.EMERALD ? 'text-green-500' : theme === Theme.RETRO ? 'text-amber-800' : 'text-purple-600'}`}>Cloud</div>
            <div className="text-sm opacity-60 text-gray-500">分散式部署</div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === Theme.RETRO ? 'font-serif' : ''}`}>精選開發作品</h2>
              <p className="opacity-70 text-gray-600 dark:text-gray-400">目前活躍開發中的應用程式與系統。</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${filter === cat
                      ? `${primaryColorClass} text-white shadow-md`
                      : `bg-white dark:bg-gray-800 border transition-colors ${theme === Theme.RETRO ? 'border-orange-200 text-orange-900' : 'border-gray-200 dark:border-gray-700 hover:border-blue-400'}`
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <div key={project.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <ProjectCard project={project} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-500 italic">
                目前沒有此分類的作品，正在研發中！
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${theme === Theme.RETRO ? 'border-orange-100' : 'border-gray-100 dark:border-gray-800/50'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-6 h-6 rounded flex items-center justify-center text-white ${primaryColorClass}`}>
                <Terminal size={14} />
              </div>
              <span className={`font-bold ${theme === Theme.RETRO ? 'font-serif' : ''}`}>Loyu3C Dev</span>
            </div>
            <p className="text-sm opacity-60 text-gray-500 max-w-xs text-center md:text-left">
              致力於將水電工藝與尖端技術結合。© {new Date().getFullYear()} Loyu3C.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/loyu3c" target="_blank" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://loyu3c.notion.site/" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Globe size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating Button & Chat */}
      <AiAssistant />
    </div>
  );
};

export default App;
