import React, { useState } from 'react';
import Window from './system/Window';
import Notepad from './apps/Notepad';
import Taskbar from './system/Taskbar';

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState([
    { id: 'notepad', title: 'Notepad', app: <Notepad /> },
  ]);

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-500 to-indigo-800 text-white overflow-hidden relative">
      {windows.map((win) => (
        <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)}>
          {win.app}
        </Window>
      ))}
      <Taskbar
        onLaunchApp={(id) => {
          if (id === 'notepad') {
            setWindows((prev) =>
              prev.some((w) => w.id === id)
                ? prev
                : [...prev, { id, title: 'Notepad', app: <Notepad /> }]
            );
          }
        }}
      />
    </div>
  );
};

export default Desktop;
