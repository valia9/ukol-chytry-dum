import React from 'react';

import './style.css'
import Lights from '../Lights';
import Climate from '../Climate';
import Blinds from '../Blinds';
import Energy from '../Energy';

const Dashboard = ({dataLights, dataTemp, dataHumid, dataBlinds, dataEl, dataWater}) => (
    <main className="dashboard">
        <Lights lights={dataLights}/>
        <Climate temperature={dataTemp} humidity={dataHumid}/>
        <Blinds state={dataBlinds}/>
        <Energy electricity={dataEl} water={dataWater} />
    </main>
)

export default Dashboard;