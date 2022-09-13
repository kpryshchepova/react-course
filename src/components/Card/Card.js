import { Tile } from 'carbon-components-react';
import React, { useState } from 'react';


const Card = () => {
    const uncheckedCardStyle = 'bx--tile--clickable card';
    const checkedCardStyle = 'bx--tile--clickable card__checked';
    
    const [cardStyleValue, setCardStyleValue] = useState(uncheckedCardStyle);

    function checkBoxClickHandler(event) {
        setCardStyleValue(event.target.checked ? checkedCardStyle : uncheckedCardStyle);
    }

    return (
    <Tile className={cardStyleValue}>
        <div className='card__header'>
            Header
            <input className='card__checkbox' type="checkbox" onChange={checkBoxClickHandler}/>
        </div>
        <hr/>
        <div className='card__content'>
            Content
        </div>
    </Tile>
)};

export default Card;