import React, { useState } from 'react';
import './BrandSideBar.css'


const PanelExpansible = () => {
  const [expandido, setExpandido] = useState(false);

  const estadoPanel = () => {
    setExpandido(!expandido);
  };

  return (
    <div>
      <button className='btn-brand' onClick={estadoPanel}>
        {expandido ? 'Brand -' : 'Brand +'}
      </button>
      {expandido && (
        <div className="brandFormato">
            <div>
                <h4>Apple</h4>
                <h4>BQ</h4>
                <h4>Meizu</h4>
                <h4>Samsung</h4>
            </div>
            <div>
                <h4>Alcatel</h4>
                <h4>Honor</h4>
                <h4>OnePlus</h4>
                <h4>ZTE</h4>
            </div>
        </div>
      )}
    </div>
  );
};

export default PanelExpansible;