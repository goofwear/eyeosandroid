import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({ title, children, onClose }) => {
  const [isFocused, setIsFocused] = useState(true);
  const ref = useRef(null);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: window.innerWidth, top: 0, bottom: window.innerHeight }}
      className={\`absolute bg-white text-black dark:bg-zinc-900 dark:text-white shadow-2xl rounded-xl border-2 border-zinc-200 dark:border-zinc-800 w-[500px] h-[400px] \${isFocused ? 'z-50' : 'z-10'}\`}
      onMouseDown={() => setIsFocused(true)}
      ref={ref}
    >
      <div className="flex items-center justify-between p-2 bg-zinc-100 dark:bg-zinc-800 rounded-t-xl cursor-move">
        <span className="text-sm font-medium">{title}</span>
        <button onClick={onClose} className="text-red-500 hover:text-red-700">
          <X size={18} />
        </button>
      </div>
      <div className="p-4 overflow-auto h-[calc(100%-40px)]">{children}</div>
    </motion.div>
  );
};

export default Window;
