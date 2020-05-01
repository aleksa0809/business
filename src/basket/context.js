import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

const getBasketSize = ()=> {
    let basket = localStorage.getItem('basket')
    return basket && JSON.parse(basket).length || 0
}

class BasketContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            counter: getBasketSize(),
            updateCounter: ()=> this.setState({counter: getBasketSize()})
        }
    }
    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

export { BasketContextProvider, Consumer as BasketContextConsumer };
