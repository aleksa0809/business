import React from 'react';
import {AppContextConsumer} from '../Context'
import './page.css'
import Card from '../components/card'

export default function Showcase(props) {
  const {sector, size, toplist, basket} = props  
  const prefix = 'http://localhost:3001/api'  
  const url = prefix + (toplist ? '/toplist' : `/${sector}/${size}`)  
  let updated = false  
  return (
      <AppContextConsumer>
          {context=> { 
             if(!updated){updated = true; context.updateShowcase(basket && 'basket' || url)}
             let header
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
             const items = []  
             for(const $ of context.showcase) items.push(
                 <Card image={$.picture && "/images/"+$.picture || "http://placehold.it/700x400"} {...$} basket={!!basket}/>)
             return (
                 <div className="av-page">
                     <h1>{header}</h1>
                     <div class="row">
                         {items}
                     </div>
                 </div>
            )}
          }
      </AppContextConsumer>
  );
}


