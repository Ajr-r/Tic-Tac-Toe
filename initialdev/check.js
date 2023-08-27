export function checkwinner(box) {
    let player = sessionStorage.getItem('player');
    switch (box) {
        case 'box1': {
            if (sessionStorage.getItem('box5') === player &&
                sessionStorage.getItem('box9') === player){
                    addb(['.box1','.box9','.box5']);
                    return 1;
                }
            else if (sessionStorage.getItem('box4') === player &&
                sessionStorage.getItem('box7') === player){
                    addb(['.box1','.box4','.box7']);
                    return 1;
                }
            else if (sessionStorage.getItem('box2') === player &&
                sessionStorage.getItem('box3') === player){
                    addb(['.box1','.box2','.box3']);
                    return 1;
                }
            break;
        }
        case 'box2': {
            if (sessionStorage.getItem('box5') === player &&
                sessionStorage.getItem('box8') === player){
                    addb(['.box2','.box5','.box8']);
                    return 1;
                }
            else if (sessionStorage.getItem('box1') === player &&
                sessionStorage.getItem('box3') === player){
                    addb(['.box2','.box1','.box3']);
                    return 1;
                }
            break;
        }
        case 'box3': {
            if (sessionStorage.getItem('box5') === player &&
                sessionStorage.getItem('box7') === player){
                    addb(['.box3','.box5','.box7']);
                    return 1;
                }
            else if (sessionStorage.getItem('box2') === player &&
                sessionStorage.getItem('box1') === player){
                    addb(['.box3','.box2','.box1']);
                    return 1;
                }
            else if (sessionStorage.getItem('box6') === player &&
                sessionStorage.getItem('box9') === player){
                    addb(['.box3','.box6','.box9']);
                    return 1;
                }
            break;
        }
        case 'box4': {
            if (sessionStorage.getItem('box1') === player &&
                sessionStorage.getItem('box7') === player){
                    addb(['.box4','.box1','.box7']);
                    return 1;
                }
            else if (sessionStorage.getItem('box5') === player &&
                sessionStorage.getItem('box6') === player){
                    addb(['.box4','.box5','.box6']);
                    return 1;
                }
            break;
        }
        case 'box5': {
            if (sessionStorage.getItem('box2') === player &&
                sessionStorage.getItem('box8') === player){
                    addb(['.box5','.box2','.box8']);
                    return 1;
                }
            else if (sessionStorage.getItem('box4') === player &&
                sessionStorage.getItem('box6') === player){
                    addb(['.box5','.box4','.box6']);
                    return 1;
                }
            else if (sessionStorage.getItem('box1') === player &&
                sessionStorage.getItem('box9') === player){
                    addb(['.box5','.box1','.box9']);
                    return 1;
                }
            else if (sessionStorage.getItem('box3') === player &&
                sessionStorage.getItem('box7') === player){
                    addb(['.box5','.box3','.box7']);
                    return 1;
                }
            break;
        }
        case 'box6': {
            if (sessionStorage.getItem('box3') === player &&
                sessionStorage.getItem('box9') === player){
                    addb(['.box6','.box9','.box3']);
                    return 1;
                }
            else if (sessionStorage.getItem('box4') === player &&
                sessionStorage.getItem('box5') === player){
                    addb(['.box6','.box5','.box4']);
                    return 1;
                }
            break;
        }
        case 'box7': {
            if (sessionStorage.getItem('box4') === player &&
                sessionStorage.getItem('box1') === player){
                    addb(['.box7','.box4','.box1']);
                    return 1;
                }
            else if (sessionStorage.getItem('box5') === player &&
                sessionStorage.getItem('box3') === player){
                    addb(['.box7','.box5','.box3']);
                    return 1;
                }
            else if (sessionStorage.getItem('box8') === player &&
                sessionStorage.getItem('box9') === player){
                    addb(['.box7','.box8','.box9']);
                    return 1;
                }
            break;
        }
        case 'box8': {
            if (sessionStorage.getItem('box2') === player &&
                sessionStorage.getItem('box5') === player){
                    addb(['.box8','.box2','.box5']);
                    return 1;
                }
            else if (sessionStorage.getItem('box7') === player &&
                sessionStorage.getItem('box9') === player){
                    addb(['.box8','.box7','.box9']);
                    return 1;
                }
            break;
        }
        case 'box9': {
            if (sessionStorage.getItem('box6') === player &&
                sessionStorage.getItem('box3') === player){
                    addb(['.box9','.box6','.box3']);
                    return 1;
                }
            else if (sessionStorage.getItem('box5') === player &&
                sessionStorage.getItem('box1') === player){
                    addb(['.box9','.box5','.box1']);
                    return 1;
                }
            else if (sessionStorage.getItem('box8') === player &&
                sessionStorage.getItem('box7') === player){
                    addb(['.box9','.box8','.box7']);
                    return 1;
                }
            break;
        }
    }
    return checkdraw();
}

function checkdraw() {
    let arr = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
    let c = 2
    arr.forEach((b) => {
        if (!sessionStorage.getItem(b)) {
            c = 0;
            return;
        }
    })
    return c;
}
function addb(box){
    box.forEach((b)=>{
        document.querySelector(b).firstChild.classList.add('blink');
    })
}