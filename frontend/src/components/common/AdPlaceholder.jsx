import React from 'react';

const AdPlaceholder = ({ width = '100%', height = '250px', label = 'Ad Space' }) => {
  return (
    <div 
      className="bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-slate-400 text-xs uppercase tracking-widest rounded-sm overflow-hidden my-6 mx-auto"
      style={{ width, height, maxWidth: '100%' }}
    >
      <span className="font-semibold">{label}</span>
      <span className="text-[10px] mt-1 opacity-70">Sponsored Content</span>
    </div>
  );
};

export default AdPlaceholder;
