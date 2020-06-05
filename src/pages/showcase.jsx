import React from 'react';
import {AppContextConsumer} from '../Context'
import './page.css'
import Card from '../components/card'
import data from './data'

const restoreFromBasket = ()=> {
    const basket = window.localStorage.getItem('basket') 
    if(!basket) return []
    return JSON.parse(basket)
}

export default function Showcase(props) {
    const {sector, size, toplist, basket} = props  
    let items = basket && restoreFromBasket() || data.filter($=> toplist && $.toplist || ($.size == size && $.sector == sector))
    let header = !items.length && 'There is nothing to show' || ''
    if(!header){
        switch(sector){
            case 'casual':
                 header = 'Casual'
                 break
            case 'lux':
                 header = 'Lux'
                 break
            default:
                 header = toplist && 'Top List' || basket && 'Your basket content'
        } 
        if(size) header += `, ${size} size` 
    }
    items = items.map($=> <Card image={$.picture && "/images/"+$.picture || "http://placehold.it/700x400"} {...$} basket={basket && items || !!basket}/>)
    return (
         <div className="av-page">
             <h1>{header}</h1> 
             <div class="row">
                 {items}
             </div>
         </div>
    )
}


