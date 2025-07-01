import React from 'react';
import { Play } from 'lucide-react';

interface TaskbarProps {
  onLaunchApp: (appId: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ onLaunchApp }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/60 backdrop-blur-md border-t border-white/10 flex items-center justify-start px-4 gap-3">
      <button
        onClick={() => onLaunchApp('notepad')}
        className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center"
      >
        <Play size={16} />
      </button>
      <div className="ml-auto text-sm text-white pr-2">{new Date().toLocaleTimeString()}</div>
    </div>
  );
};

export default Taskbar;
