import { Tile } from 'carbon-components-react';
import React from 'react';

const Card = () => (
    <Tile className='bx--tile--clickable card'>
        <div className='card__header'>
            Header
        </div>
        <hr/>
        <div className='card__content'>
            Content
        </div>
    </Tile>
);

export default Card;