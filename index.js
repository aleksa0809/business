import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader   from 'uielements/loader/loader.component';
import Navbar   from 'uielements/navbar/navbar.component';
import LeftMenu from 'uielements/leftmenu/leftmenu.component';
import {BasketContextProvider}  from './src/basket/context.js';

const App = React.lazy(() => import('./src/app'));
  
const Index = () => (
        <Suspense fallback={<Loader />}>
            <App />
        </Suspense>
);

ReactDOM.render(<BasketContextProvider><Navbar /></BasketContextProvider>,   document.querySelector('header'));
ReactDOM.render(<LeftMenu />, document.querySelector('#left-menu'));
ReactDOM.render(<BasketContextProvider><Index /></BasketContextProvider>,    document.querySelector('main'));
