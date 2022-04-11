import React, { useState } from 'react';

import './style.css';
import offUrl from './light-off.svg'
import onUrl from './light-on.svg'

const Light = ({name, state}) => {

    const [isOn, setIsOn] = useState(state);

   return (
        <>
        <div className="light" onClick={() => setIsOn(isOn === 'on' ? 'off' : 'on')}>
                        <div className="light__icon">
                            <img src={isOn === 'on' ? onUrl : offUrl}/>
                        </div>
                        <div className="light__name">
                            {name}
                        </div>
                    </div>
        </>
    )
}

export default Light;