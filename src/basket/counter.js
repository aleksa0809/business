import React from 'react';
import {BasketContextConsumer} from './context'

export default function BasketCounter() {
  return (
    <BasketContextConsumer>
      {context=>(
        <div className="navbar-item" href="#/basket"> 
            <span>Items in basket:</span>
            &nbsp;
            <span>{context.counter}</span> 
        </div>
      )}
    </BasketContextConsumer>
  );
}


