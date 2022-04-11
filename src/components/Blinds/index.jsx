import React, { useState } from 'react';

import './style.css';
import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';

const Blinds = ({state}) => {

    const [stav, setStav] = useState(state);

    return (
    <div className="blinds">
				<div className="blinds__icon">
					<img src={stav === 'open' ? blindsOpen : blindsClosed} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className={stav === 'open' ? 'button button--active' : 'button'} onClick={() => setStav('open')}>Otevřeno</button>
					<button className={stav === 'closed' ? 'button button--active' : 'button'} onClick={() => setStav('closed')}>Zavřeno</button>
				</div>
			</div>

    )
}

export default Blinds;