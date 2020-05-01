import React from 'react';
import {BasketContextConsumer} from '../../basket/context'
import './card.css'

function addToBasket(key, toast, add){
  let basket = localStorage.getItem("basket");
  if(!basket ){
    basket = new Set;
  }
  else{
    basket = JSON.parse(basket)
    basket = new Set(basket)
  }
  basket.add(key);
  basket = Array.from(basket);
  basket = JSON.stringify(basket);
  localStorage.setItem("basket", basket);
  toast({message: "added to basket", position: "top-center", type:"is-success"})
  add()  
}

const ButtonAdd = function(props){
    return (
        <BasketContextConsumer>
            {context=>(
                <button onClick= { ()=>addToBasket (props.url, props.toast, context.updateCounter)} >To basket</button>
            )}
        </BasketContextConsumer>
    )
}

export default function Card(props) {
  return (
      <div className="card anna-veronica-card">
          <div className="card-image">
            <figure className="image anna-veronica-photo">
              <img src={props.url} alt="Placeholder image"/>
            </figure>
          </div>
          <div className="card-content">

            <div className="content">
               {props.description} 
            </div>
            <ButtonAdd {...props}/>
          </div>
      </div>
)}
