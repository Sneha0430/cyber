import React, { useState } from 'react';
import { PenTool, Code, Music, Palette, Wand2 } from 'lucide-react';
import '../index.css';

const PromptGenerator = () => {
  const [activeTab, setActiveTab] = useState('writing');
  const [promptText, setPromptText] = useState('');
  const [parameters, setParameters] = useState({
    creativity: 50,
    specificity: 50,
    length: 50
  });

  const tabs = [
    { id: 'writing', icon: <PenTool className="icon-small" />, label: 'Writing' },
    { id: 'coding', icon: <Code className="icon-small" />, label: 'Coding' },
    { id: 'music', icon: <Music className="icon-small" />, label: 'Music' },
    { id: 'art', icon: <Palette className="icon-small" />, label: 'Art' }
  ];

  return (
    <div className="prompt-generator">
      <h2>Prompt Generator</h2>
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="prompt-input">
        <label>Enter Your Prompt</label>
        <textarea
          placeholder="Start typing your prompt here..."
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />
      </div>

      <div className="parameters">
        <div className="range-sliders">
          {Object.entries(parameters).map(([key, value]) => (
            <div key={key}>
              <label>{key}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setParameters(prev => ({ ...prev, [key]: parseInt(e.target.value) }))} />
            </div>
          ))}
        </div>

        <div className="suggestions">
          <h3>Suggestions</h3>
          <ul>
            <li>• Add more specific details about the context</li>
            <li>• Consider including technical requirements</li>
            <li>• Specify desired output format</li>
          </ul>
        </div>
      </div>

      <div className="actions">
        <button className="generate-button">
          <Wand2 className="icon-small" />
          Generate
        </button>
        <button className="optimize-button">
          Optimize
        </button>
      </div>
    </div>
  );
};

export default PromptGenerator;
