import React, { useState } from 'react';
import './MemorySideBar.css'


const PanelExpansible = () => {
  const [expandido, setExpandido] = useState(false);

  const estadoPanel = () => {
    setExpandido(!expandido);
  };

  return (
    <div>
      <button className='btn-memory' onClick={estadoPanel}>
        {expandido ? 'Memory -' : 'Memory +'}
      </button>
      {expandido && (
        <div className="memoryFormato">
            <div>
                <h4>8Gb</h4>
                <h4>32Gb</h4>
                <h4>12Gb</h4>
            </div>
            <div>
                <h4>16Gb</h4>
                <h4>64Gb</h4>
                <h4>256Gb</h4>
            </div>
        </div>
      )}
    </div>
  );
};

export default PanelExpansible;