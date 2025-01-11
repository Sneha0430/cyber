import React from 'react';
import Navigation from './components/Navigation.jsx';
import PromptGenerator from './components/PromptGenerator.jsx';
import Sidebar from './components/Sidebar.jsx';
import OutputSection from './components/OutputSection.jsx';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9 space-y-6">
            <PromptGenerator />
            <OutputSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
