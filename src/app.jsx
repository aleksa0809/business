import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import db from './database.js'

const Welcome    = React.lazy(() => import('./pages/welcome'));
const Instagram  = React.lazy(() => import('./pages/instagram'));
const Mission    = React.lazy(() => import('./pages/mission'));

const ShowCase   = React.lazy(() => import('./pages/showcase/index'));
const Contacts   = React.lazy(() => import('./pages/contacts'));

const filterData = (props, toplist)=> {
    const {segment, size} = props.match.params
    let data = db.filter($=> $.segment == segment && $.size == size || toplist && $.toplist)
    return {segment, size, data, toplist}
}

export default function App() {
  return (
      <div className="main-container">
      <HashRouter>
        <Switch>
          <Route path="/mission">
            <Mission />
          </Route>
          <Route path="/instagram">
            <Instagram />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/toplist" render={(props) => <ShowCase {...filterData(props, true)} />} />
          <Route path="/showcase/:segment/:size" render={(props) => <ShowCase {...filterData(props)} />} />
          <Route>
            <Welcome />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
