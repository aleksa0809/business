import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContextProvider}  from './Context';
import Loader from './components/loader';
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

serviceWorker.unregister();
