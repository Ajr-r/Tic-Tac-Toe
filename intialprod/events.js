export function adding_event(box_list){
    box_list.forEach(box => {
        box.addEventListener('click',()=>{
            if(sessionStorage.getItem(box.classList[0]))return;
            let sp=document.createElement('span')
            sp.innerText=sessionStorage.getItem('player');
            box.appendChild(sp);
            sessionStorage.setItem(box.classList[0],sessionStorage.getItem('player'))
            let win=checkwinner(box.classList[0]);
            if(win){
                
               setTimeout( ()=>{alert(`player ${sessionStorage.getItem('player')} won`);location.reload()},100);
               return;
            }
            
            change();
        })
        sessionStorage.getItem('player')

    });
    
}
function change(){
    if(sessionStorage.getItem('player')==='x'){
        sessionStorage.setItem('player','o');
    }
    else sessionStorage.setItem('player','x');
}
function checkwinner(box){
    let player=sessionStorage.getItem('player');
    switch (box) {
        case 'box1':{

            if(sessionStorage.getItem('box5')===player&&
            sessionStorage.getItem('box9')===player)
            return 1;
            else if(sessionStorage.getItem('box4')===player&&
            sessionStorage.getItem('box7')===player)
            return 1;
            else if(sessionStorage.getItem('box2')===player&&
            sessionStorage.getItem('box3')===player)
            return 1;
            break;
        }
        case 'box2':{

            if(sessionStorage.getItem('box5')===player&&
            sessionStorage.getItem('box8')===player)
            return 1;
            else if(sessionStorage.getItem('box1')===player&&
            sessionStorage.getItem('box3')===player)
            return 1;

            break;
        }
        case 'box3':{

            if(sessionStorage.getItem('box5')===player&&
            sessionStorage.getItem('box7')===player)
            return 1;
            else if(sessionStorage.getItem('box2')===player&&
            sessionStorage.getItem('box1')===player)
            return 1;
            else if(sessionStorage.getItem('box6')===player&&
            sessionStorage.getItem('box9')===player)
            return 1;
            break;
        }
        case 'box4':{

            if(sessionStorage.getItem('box1')===player&&
            sessionStorage.getItem('box7')===player)
            return 1;
            else if(sessionStorage.getItem('box5')===player&&
            sessionStorage.getItem('box6')===player)
            return 1;

            break;
        }
        case 'box5':{

            if(sessionStorage.getItem('box2')===player&&
            sessionStorage.getItem('box8')===player)
            return 1;
            else if(sessionStorage.getItem('box4')===player&&
            sessionStorage.getItem('box6')===player)
            return 1;
            else if(sessionStorage.getItem('box1')===player&&
            sessionStorage.getItem('box9')===player)
            return 1;
            else if(sessionStorage.getItem('box3')===player&&
            sessionStorage.getItem('box7')===player)
            return 1;
            break;
        }
        case 'box6':{
            if(sessionStorage.getItem('box3')===player&&
            sessionStorage.getItem('box9')===player)
            return 1;
            else if(sessionStorage.getItem('box4')===player&&
            sessionStorage.getItem('box5')===player)
            return 1;

            break;
        }
        case 'box7':{

            if(sessionStorage.getItem('box4')===player&&
            sessionStorage.getItem('box1')===player)
            return 1;
            else if(sessionStorage.getItem('box5')===player&&
            sessionStorage.getItem('box3')===player)
            return 1;
            else if(sessionStorage.getItem('box8')===player&&
            sessionStorage.getItem('box9')===player)
            return 1;
            break;
        }
        case 'box8':{
            if(sessionStorage.getItem('box2')===player&&
            sessionStorage.getItem('box5')===player)
            return 1;
            else if(sessionStorage.getItem('box7')===player&&
            sessionStorage.getItem('box9')===player)
            return 1;

            break;
        }
        case 'box9':{

            if(sessionStorage.getItem('box6')===player&&
            sessionStorage.getItem('box3')===player)
            return 1;
            else if(sessionStorage.getItem('box5')===player&&
            sessionStorage.getItem('box1')===player)
            return 1;
            else if(sessionStorage.getItem('box8')===player&&
            sessionStorage.getItem('box7')===player)
            return 1;
            break;
        }
    
        
    }
}