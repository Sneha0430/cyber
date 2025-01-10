import React, { useState } from 'react';
import { PenTool, Code, Music, Palette, Wand2 } from 'lucide-react';

const PromptGenerator = () => {
  const [activeTab, setActiveTab] = useState('writing');
  const [promptText, setPromptText] = useState('');
  const [parameters, setParameters] = useState({
    creativity: 50,
    specificity: 50,
    length: 50
  });

  const tabs = [
    { id: 'writing', icon: <PenTool className="w-4 h-4" />, label: 'Writing' },
    { id: 'coding', icon: <Code className="w-4 h-4" />, label: 'Coding' },
    { id: 'music', icon: <Music className="w-4 h-4" />, label: 'Music' },
    { id: 'art', icon: <Palette className="w-4 h-4" />, label: 'Art' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Prompt Generator</h2>
      
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              activeTab === tab.id ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Prompt Input */}
      <div className="mb-6">
        <label className="block mb-2 font-medium">Enter Your Prompt</label>
        <textarea
          className="w-full h-32 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500"
          placeholder="Start typing your prompt here..."
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />
      </div>

      {/* Parameters */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          {Object.entries(parameters).map(([key, value]) => (
            <div key={key}>
              <label className="block mb-2 capitalize">{key}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setParameters(prev => ({
                  ...prev,
                  [key]: parseInt(e.target.value)
                }))}
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Suggestions</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Add more specific details about the context</li>
            <li>• Consider including technical requirements</li>
            <li>• Specify desired output format</li>
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          <Wand2 className="w-4 h-4" />
          Generate
        </button>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Optimize
        </button>
      </div>
    </div>
  );
};

export default PromptGenerator;