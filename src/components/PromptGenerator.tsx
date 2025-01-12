import React, { useState } from 'react';
import { PenTool, Code, Music, Palette, Wand2 } from 'lucide-react';
import { savePrompt } from '../utils/api'; // Import the API function for saving prompts

const PromptGenerator = () => {
  const [activeTab, setActiveTab] = useState('writing');
  const [promptText, setPromptText] = useState('');
  const [parameters, setParameters] = useState({
    creativity: 50,
    specificity: 50,
    length: 50,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const tabs = [
    { id: 'writing', icon: <PenTool className="w-4 h-4" />, label: 'Writing' },
    { id: 'coding', icon: <Code className="w-4 h-4" />, label: 'Coding' },
    { id: 'music', icon: <Music className="w-4 h-4" />, label: 'Music' },
    { id: 'art', icon: <Palette className="w-4 h-4" />, label: 'Art' },
  ];

  const handleGenerate = async () => {
    if (!promptText.trim()) {
      setMessage({ type: 'error', text: 'Prompt cannot be empty!' });
      return;
    }
    setLoading(true);
    try {
      const response = await savePrompt({ promptText, parameters });
      setMessage({ type: 'success', text: 'Prompt saved successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save prompt!' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Prompt Generator</h2>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <textarea
        className="w-full h-32 border rounded p-2"
        value={promptText}
        onChange={e => setPromptText(e.target.value)}
        placeholder="Enter your prompt here..."
      />
      <button
        className={`mt-4 p-2 bg-blue-500 text-white rounded ${loading ? 'opacity-50' : ''}`}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Prompt'}
      </button>
      {message.text && (
        <div className={`mt-2 text-${message.type === 'error' ? 'red' : 'green'}-500`}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default PromptGenerator;