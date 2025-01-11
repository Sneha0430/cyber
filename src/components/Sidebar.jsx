import React from 'react';
import { Save, Download, Share } from 'lucide-react';
import '../index.css';

const Sidebar = () => {
  const actions = [
    { icon: <Save className="icon-small" />, label: 'Save Prompt' },
    { icon: <Download className="icon-small" />, label: 'Export' },
    { icon: <Share className="icon-small" />, label: 'Share' }
  ];

  return (
    <div className="sidebar">
      <h2>Quick Actions</h2>
      <div className="action-buttons">
        {actions.map((action, index) => (
          <button key={index} className="action-button">
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
