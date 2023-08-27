let xwins = 0;
let owins = 0;
import { checkwinner } from "./check.js";
export function adding_event(box_list) {
    box_list.forEach(box => { 
        box.addEventListener('click', (e) => {
    if (sessionStorage.getItem(box.classList[0])) return;
            let sp = document.createElement('img');
            let p = sessionStorage.getItem('player');
            if (p === 'x') {
                document.querySelector('.oicon').classList.add('dsp');
                document.querySelector('.xicon').classList.remove('dsp');

            }
            else {
                document.querySelector('.xicon').classList.add('dsp');
                document.querySelector('.oicon').classList.remove('dsp');

            }
            p === 'x' ? sp.src = './assets/images/cross.svg' : sp.src = './assets/images/circle.svg'
            box.appendChild(sp);
            sessionStorage.setItem(box.classList[0], sessionStorage.getItem('player'))
            let win = checkwinner(box.classList[0]);
            if (win === 1) {
                disableclicks();
                // e.preventdefault();
                let score = document.createElement('img');
                score.src = './assets/images/score.svg';
                score.style.margin='2px';
                score.classList.add('sa');
                if (p === 'x') {
                    document.querySelector('.xscore').appendChild(score);
                    xwins+=1;
                }
                else{
                    document.querySelector('.oscore').appendChild(score);
                    owins+=1;


                }
                if (xwins === 3 || owins === 3) {    
                    disableclicks();
                    if(owins>xwins)
                    document.querySelector('.sym').src='./assets/images/bigo.svg';    
                                
                   setTimeout( ()=>{
                    document.querySelectorAll('.unblur').forEach((e)=>{
                        e.classList.remove('unblur');
                    })
                    document.querySelector('.xicon').classList.remove('dsp');
                    document.querySelector('.oicon').classList.remove('dsp');
                    
                    document.querySelector('.w_screen').classList.add('dsp')},1200);
                }
                else {
                    p==='x'?sessionStorage.setItem('player','o'):sessionStorage.setItem('player','x');
                     setTimeout(resetboard, 1300);
                }

                //    alert(`player ${sessionStorage.getItem('player')} won`);location.reload()
                return;
            }
            else if (win === 2) {
            const boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
            boxes.forEach((b)=>{
                document.querySelector('.'+b).firstChild.classList.add('blink');
            })
            // p==='x'?sessionStorage.setItem('player','o'):sessionStorage.setItem('player','x');
                
            setTimeout(resetboard, 1300);

            }

            change();
        })
      

    });

}
function enableclicks(){
    const boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
    boxes.forEach((b)=>{
        document.querySelector('.'+b).style.pointerEvents = 'auto';
    })

}
function disableclicks(){
    const boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
    boxes.forEach((b)=>{
        document.querySelector('.'+b).style.pointerEvents = 'none';
    })

}
function resetboard() {
    const boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
    boxes.forEach((box) => {

        if (sessionStorage.getItem(box)) {

            let b = document.getElementsByClassName(box);
            b.item(0).removeChild(b.item(0).firstChild)
        }
        sessionStorage.removeItem(box);
    })
    enableclicks()

}
function change() {
    if (sessionStorage.getItem('player') === 'x') {
        sessionStorage.setItem('player', 'o');
    }
    else sessionStorage.setItem('player', 'x');
}
