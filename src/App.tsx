import React from 'react';
import Navigation from './components/Navigation.tsx';
import PromptGenerator from './components/PromptGenerator.tsx';
import Sidebar from './components/Sidebar.tsx';
import OutputSection from './components/OutputSection.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
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