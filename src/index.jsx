import React from 'react';
import { render } from 'react-dom';
import './style.css';

import smartHomeData from './smartHomeData.js';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {

  return (
    <>
    <div className="container">
    <Header title='Chytrý dům'/>
    <Dashboard 
      dataLights={smartHomeData.lights} 
      dataTemp={smartHomeData.climate.temperature} 
      dataHumid={smartHomeData.climate.humidity}
      dataBlinds={smartHomeData.blinds}
      dataEl={smartHomeData.energyConsumption.electricity}
      dataWater={smartHomeData.energyConsumption.water}
      />
    </div>
    </>
  )
}

render(<App />, document.querySelector('#app'));
