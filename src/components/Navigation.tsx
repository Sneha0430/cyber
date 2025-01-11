import React from 'react';
import { Home, History, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                { icon: <Home className="w-4 h-4" />, label: 'Home', path: '/' },
                { icon: <History className="w-4 h-4" />, label: 'History', path: '/history' },
                { icon: <Wand2 className="w-4 h-4" />, label: 'Dashboard', path: '/dashboard' },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
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