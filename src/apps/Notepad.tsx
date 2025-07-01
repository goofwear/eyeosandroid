import React, { useState, useEffect } from 'react';

const Notepad: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('notepad-data');
    if (saved) setText(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('notepad-data', text);
  }, [text]);

  return (
    <textarea
      className="w-full h-full p-4 text-sm font-mono bg-white dark:bg-zinc-900 text-black dark:text-white resize-none outline-none"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Start typing..."
    />
  );
};

export default Notepad;
