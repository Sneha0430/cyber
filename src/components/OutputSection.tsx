import React from 'react';

const OutputSection = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Generated Output</h2>
      <textarea
        className="w-full h-48 p-3 border rounded-lg resize-none bg-gray-50"
        readOnly
        placeholder="Your generated prompt will appear here..."
      />
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Copy to Clipboard
        </button>
        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Save Prompt
        </button>
      </div>
    </div>
  );
};

export default OutputSection;