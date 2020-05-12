import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContextProvider}  from './Context';
import Loader from './components/loader';
//import Navbar from "./components/navbar"
//import LeftMenu from "./components/leftmenu"
import * as serviceWorker  from './serviceWorker';

ReactDOM.render(
    <Suspense fallback={<Loader />}>
      <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
      </React.StrictMode>
    </Suspense>,
  document.getElementById('root')
)

//ReactDOM.render(<Navbar />, document.getElementById('navbar'))
//ReactDOM.render(<Carousel />, document.getElementById('carousel'))
//ReactDOM.render(<LeftMenu />, document.getElementById('leftmenu'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
