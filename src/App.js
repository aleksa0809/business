import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Navbar from "./components/navbar"
import LeftMenu from "./components/leftmenu"
const Welcome   = React.lazy(() => import('./pages/welcome'));
const Instagram = React.lazy(() => import('./pages/instagram'));
const Contacts  = React.lazy(() => import('./pages/contacts'));
const Showcase  = React.lazy(() => import('./pages/showcase'));

class App extends Component {
    render() {
      return  (
        <div>  
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <LeftMenu />
                    </div>
                    <div class="col-lg-9">
                      <HashRouter>
                        <Switch>
                          <Route path="/instagram">
                            <Instagram />
                          </Route>
                          <Route path="/contacts">
                            <Contacts />
                          </Route>
                          <Route>
                            <Welcome />
                          </Route>
                        </Switch>
                      </HashRouter>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;
