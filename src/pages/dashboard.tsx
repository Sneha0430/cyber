import React from 'react';
import { Home, Wand2,  FileText, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
                <p className="text-2xl font-bold">120</p>
              </div>
              <div className="stat-card bg-white rounded-lg shadow p-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-sm text-gray-500">Recent Activity</h3>
                <p className="text-2xl font-bold">5 prompts today</p>
              </div>
              <div className="stat-card bg-white rounded-lg shadow p-6">
                <Star className="w-6 h-6 text-orange-600" />
                <h3 className="text-sm text-gray-500">Favorites</h3>
                <p className="text-2xl font-bold">12 saved prompts</p>
              </div>
            </div>
            <div className="recent-prompts">
              <h3 className="text-xl font-bold mb-4">Recent Prompts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• "Write a blog post about AI trends"</li>
                <li>• "Generate a Python script for data analysis"</li>
                <li>• "Create a song about summer"</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;