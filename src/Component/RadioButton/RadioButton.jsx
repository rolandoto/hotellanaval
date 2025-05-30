import React from "react"

const RadioButton = ({ name, id, checked, onChange, children }) => {
  return (
    <label className="flex items-center gap-2">
      <div className="relative flex items-center justify-center">
        <input 
          type="radio" 
          name={name} 
          id={id} 
          className="hidden" 
          checked={checked} 
          onChange={onChange} 
        />
        <div className={`w-5 h-5 border ${checked ? 'border-gray-700' : 'border-'} rounded-full flex items-center justify-center`}>
          {checked && <div className="w-3 h-3 bg-gray-800 rounded-full"></div>}
        </div>
      </div>
      {children}
    </label>
  );
};

export default RadioButton