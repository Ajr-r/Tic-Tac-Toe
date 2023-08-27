// console.log(document.querySelectorAll('.cont div'));
sessionStorage.clear(); 

import {adding_event} from './events.js'
 localStorage.removeItem('player')
 let curplayer='';
 if(!sessionStorage.getItem('player'))sessionStorage.setItem('player','x');
 let box_list=document.querySelectorAll('.cont div');
 adding_event(box_list);
 

