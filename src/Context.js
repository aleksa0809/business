import React, {Component} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AppContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return <Provider value={this.state}><ToastContainer />{this.props.children}</Provider>;
    }
}

const {Provider, Consumer} = React.createContext();
export {AppContextProvider, Consumer as AppContextConsumer};

