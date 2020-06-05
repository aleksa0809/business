import React, {Component} from 'react'
import {AppContextConsumer} from '../Context'
import './card.css'

const addToBasket = (props)=> {
    if(props.basket) return alert('TODO') // TODO: organize a removing from basket
    const {id, image, name, price, description, color, increment} = props
    increment()
    let basket = window.localStorage.getItem('basket') || '[]'
    basket = JSON.parse(basket)
    basket.push({id, image, name, price, description, color})
    window.localStorage.setItem('basket', JSON.stringify(basket))
}

const getButtonText = $=> $ ? 'Remove from basket' : 'Add to cart'

function Counter (props){
    const {increment, decrement} = props // TODO: realize a correct incr, dect
    return (
        <div class="container">
            <div className="row">
                <div className="col1"><label>Amount</label></div>
                <div className="col1"><input type="number" min="1" value="1" onChange={increment}/></div>
                <div class="w-100"></div>
            </div>
        </div>
    )
}

function Card(props) {
    const {image, name, price, description, color, basket, increment, decrement} = props
    return (
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src={image}  alt="" /></a>
                <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">{name}</a>
                    </h4>
                    <h5>${price}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{color}</p>
                    <Counter basket={basket} increment={increment} decrement={decrement}/>
                </div>
                <div class="card-footer">
                    <button onClick={e=> addToBasket(props)}>{getButtonText(basket)}</button>
                </div>
            </div>
        </div>
   )
}

export default function (props) {
    return (
        <AppContextConsumer>
            {context=> 
                <Card {...props} increment={context.increment} decrement={context.decrement} />
            }
        </AppContextConsumer>
    )
}
