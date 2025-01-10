import React from 'react';
import { Home, History, BookOpen, Settings, Wand2 } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-purple-600" />
            <span className="text-xl font-bold">PromptCraft Pro</span>
          </div>
          
          <nav>
            <ul className="flex gap-6">
              {[
                { icon: <Home className="w-4 h-4" />, label: 'Dashboard' },
                { icon: <History className="w-4 h-4" />, label: 'History' },
                { icon: <BookOpen className="w-4 h-4" />, label: 'Templates' },
                { icon: <Settings className="w-4 h-4" />, label: 'Settings' }
              ].map((item, index) => (
                <li key={index}>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;