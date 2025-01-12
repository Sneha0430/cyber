import React, { useState, useEffect } from 'react';
import { Home, Wand2, FileText, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { savePrompt, getPrompts } from '../utils/api';

const Dashboard = () => {
  const [totalPrompts, setTotalPrompts] = useState(0);
  const [recentActivity, setRecentActivity] = useState(0);
  const [favorites, setFavorites] = useState(0);
  const [prompts, setPrompts] = useState([]);
  const [newPrompt, setNewPrompt] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch prompts from the backend
        const { data } = await getPrompts();

        // Update total prompts count
        setTotalPrompts(data.length);

        // Update all prompts
        setPrompts(data);

        // Count today's prompts
        const today = new Date().toISOString().split('T')[0];
        const todayPrompts = data.filter(
          (prompt) => prompt.date && prompt.date.startsWith(today)
        );
        setRecentActivity(todayPrompts.length);

        // Count favorites
        const favoritePrompts = data.filter((prompt) => prompt.isFavorite);
        setFavorites(favoritePrompts.length);
      } catch (error) {
        console.error('Error fetching prompts:', error);
      }
    };

    fetchStats();
  }, []);

  const handleSavePrompt = async () => {
    if (!newPrompt.trim()) {
      alert('Prompt cannot be empty');
      return;
    }
    try {
      // Save the new prompt to the backend
      const savedPrompt = await savePrompt({ prompt: newPrompt });
      setPrompts((prev) => [...prev, savedPrompt]); // Update the prompts list
      setTotalPrompts((prev) => prev + 1); // Update the total prompts count
      setNewPrompt(''); // Clear the input field
      alert('Prompt saved successfully!');
    } catch (error) {
      console.error('Error saving prompt:', error);
      alert('Failed to save the prompt');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="header bg-white border-b">
        <div className="header-content max-w-7xl mx-auto px-4 py-4">
          <div className="logo flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-purple-600" />
            <span className="logo-text text-xl font-bold">PromptCraft Pro</span>
          </div>
          <nav className="nav">
            <ul className="nav-list flex gap-6">
              <li>
                <Link to="/">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                    <Home className="w-4 h-4" />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                  <Clock className="w-4 h-4" />
                  History
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="content">
          <div className="dashboard-content bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="stat-card bg-white rounded-lg shadow p-6">
                <FileText className="w-6 h-6 text-green-600" />
                <h3 className="text-sm text-gray-500">Total Prompts</h3>
                <p className="text-2xl font-bold">{totalPrompts}</p>
              </div>
              <div className="stat-card bg-white rounded-lg shadow p-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-sm text-gray-500">Recent Activity</h3>
                <p className="text-2xl font-bold">{recentActivity} prompts today</p>
              </div>
              <div className="stat-card bg-white rounded-lg shadow p-6">
                <Star className="w-6 h-6 text-orange-600" />
                <h3 className="text-sm text-gray-500">Favorites</h3>
                <p className="text-2xl font-bold">{favorites} saved prompts</p>
              </div>
            </div>
            <div className="new-prompt mt-6">
              <h3 className="text-lg font-bold mb-2">Add a New Prompt</h3>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  placeholder="Enter a new prompt"
                  className="w-full p-2 border rounded"
                />
                <button
                  onClick={handleSavePrompt}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="recent-prompts mt-6">
              <h3 className="text-xl font-bold mb-4">Recent Prompts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {prompts.length === 0 ? (
                  <li>No prompts available</li>
                ) : (
                  prompts.map((prompt) => (
                    <li key={prompt.id}>• {prompt.prompt}</li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
