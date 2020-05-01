import React from 'react';
import Card from '../../uielements/card/card.component';
import './index.css';
import {toast} from "./bulma-toast.esm.js";

function Title (props) {
    if(!props.data.length) {
        toast({ message: "We are sorry...", type: "is-danger", position: "top-center" })
        return (<h1>Not found</h1>)
    }
    return  props.toplist ? (<h1>Our best goods:</h1>) : (<h1>Segment: {props.segment}, size: {props.size}</h1>) 
}

export default function ShowCase(props) {
  return (
      <div>
         <Title {...props} />
         <div className="anna-veronica-toplist"> 
             {
                 props.data.map(({url, description})=> <Card toast={toast} url={url}
                  description={description} key={url}/>)
             }
         </div> 
     </div> 
  );
}


