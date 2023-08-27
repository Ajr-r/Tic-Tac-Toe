import {adding_event} from './events.js'
import './assets/images/score.svg'
import './assets/images/bigo.svg'

import './main.css'
sessionStorage.clear();   
let time=Number(new Date().getTime().toString().at(-1));

 let curplayer='';
 if(!sessionStorage.getItem('player')){
    time%2===0?sessionStorage.setItem('player','x'):sessionStorage.setItem('player','o');   
}
let box_list=document.querySelectorAll('.cont div');
adding_event(box_list);
document.querySelector('.cp').addEventListener('click',()=>{
    document.querySelector('.m_screen').classList.add('dpn');
    document.querySelectorAll('.blur').forEach((e)=>{
        e.classList.add('unblur')
    })
    let p = sessionStorage.getItem('player');

    if (p === 'x') {
        document.querySelector('.xicon').classList.add('dsp');
        document.querySelector('.oicon').classList.remove('dsp');

    }
    else {
        document.querySelector('.oicon').classList.add('dsp');
        document.querySelector('.xicon').classList.remove('dsp');

    }
}) 

