import React from 'react';
import { Home, History, Wand2 } from 'lucide-react';
import '../index.css';

const Navigation = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Wand2 className="icon-purple" />
            <span className="title">PromptCraft Pro</span>
          </div>

          <nav>
            <ul className="nav-items">
              {[
                { icon: <Home className="icon-small" />, label: 'Dashboard' },
                { icon: <History className="icon-small" />, label: 'History' },
               
                
              ].map((item, index) => (
                <li key={index}>
                  <button className="nav-button">
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
