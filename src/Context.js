import React, {Component} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {Provider, Consumer} = React.createContext();

let basket = new Map()

const getBasketCount = ()=> {
    let items = localStorage.getItem('basket')
    if(!items) return 0
    basket = new Map(JSON.parse(items))
    return basket.size
}

class AppContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            basket,
            showcase: [],
            toast: (msg) => toast(msg),
            basketCount: getBasketCount(),
            updateCounter: ()=> this.setState({counter: getBasketCount()}),
            updateBasket:  (id, item)=> {
                basket.set(id, item)
                localStorage.setItem('basket', JSON.stringify(Array.from(basket)))
                this.setState({basketCount: getBasketCount()})
            },
            deleteFromBasket: (id)=> {
                basket.delete(id); 
                localStorage.setItem('basket', JSON.stringify(Array.from(basket)))
                this.setState({basketCount: getBasketCount()})
                this.setState({showcase: [ ...basket.values()]})
            },
            updateShowcase: (url)=> {
                if(url == 'basket'){
                    let items = localStorage.getItem('basket')
                    if(!items) return []
                    basket = new Map(JSON.parse(items))
                    this.setState({showcase: [ ...basket.values()]})
                    return
                }
                fetch(url)
                .then($=>$.json())
                .then($=> this.setState({showcase: $}))
            }
        }
    }
    render() {
        return <Provider value={this.state}><ToastContainer />{this.props.children}</Provider>;
    }
}

export {AppContextProvider, Consumer as AppContextConsumer};

