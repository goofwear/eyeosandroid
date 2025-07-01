import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [showNotepad, setShowNotepad] = useState(false);

  useEffect(() => {
    const bootSound = new Audio('/boot.mp3');
    bootSound.play().catch(() => {});
  }, []);

  return (
    <div className="desktop">
      <div className="taskbar">
        <button onClick={() => setShowNotepad(!showNotepad)}>📝 Notepad</button>
      </div>

      {showNotepad && (
        <div className="window">
          <div className="titlebar">
            <span>Notepad</span>
            <button onClick={() => setShowNotepad(false)}>✖</button>
          </div>
          <textarea defaultValue="Welcome to eyeOS!" />
        </div>
      )}
    </div>
  );
};

export default App;