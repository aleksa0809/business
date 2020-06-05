import React from 'react';
import {AppContextConsumer} from '../Context'
import "./basket-count.css"

export default function BasketCount() {
  return (
      <AppContextConsumer>
      {context=> 
          <li className="nav-item">
              <a className="nav-link av-basket-count" href="#/api/query/basket">Your shopping cart ({context.counter} items)</a>
          </li>
      }
      </AppContextConsumer>
  )
}
