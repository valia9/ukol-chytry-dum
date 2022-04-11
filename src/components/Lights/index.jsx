import React from 'react';

import './style.css';
import Light from '../Light';

const Lights = (lights) => {
return (
        <>
        <div className="lights">
        {lights.lights.map((light) => (
            <Light
              key={light.name}
              state={light.state}
              name={light.name}
            />
          ))}
    
        </div>
        </>
    )
}

export default Lights;