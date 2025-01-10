import React from 'react';
import { Save, Download, Share } from 'lucide-react';

const Sidebar = () => {
  const actions = [
    { icon: <Save className="w-4 h-4" />, label: 'Save Prompt' },
    { icon: <Download className="w-4 h-4" />, label: 'Export' },
    { icon: <Share className="w-4 h-4" />, label: 'Share' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="space-y-2">
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;