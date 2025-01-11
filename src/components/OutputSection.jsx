import React from 'react';
import '../index.css';

const OutputSection = () => {
  return (
    <div className="output-section">
      <h2>Generated Output</h2>
      <textarea
        className="output-textarea"
        readOnly
        placeholder="Your generated prompt will appear here..."
      />
      <div className="buttons">
        <button className="copy-button">Copy to Clipboard</button>
        <button className="save-button">Save Prompt</button>
      </div>
    </div>
  );
};

export default OutputSection;
