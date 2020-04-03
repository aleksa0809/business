import {getAboutContent} from "/about.js"
import {getProtypeContent} from "/prototype.js"
import {getPlusContent} from "/plus.js"

let content;

switch (location.hash){
    case "#prototype":
        content = getProtypeContent();
        break;
    case "#plus":
        content = getPlusContent();
        break;
    default: 
        content = getAboutContent(); 
}



document.body.innerHTML = content; 