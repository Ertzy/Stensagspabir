




//Countdown
const countdown = document.querySelector('#countdown')
let count = 3;

function counter(){

    countdown.innerText=count

    if(count!=0){
        setTimeout(counter, 1000)
    } 
    
    if(count==0){
        clearInterval(interval1)
        clearInterval(interval2)
    }
    count-=1
}
counter()


//Random IMG
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')



let interval1 = setInterval(randomImg1, 100)
let interval2 = setInterval(randomImg2, 100)

function randomImg1() {
    let x = Math.floor(Math.random() *3)

    if(x == 0){
        p1.src = 'IMG/Papir.jpg'
    }

    if(x == 1){
        p1.src = 'IMG/Stein.jpg'
    }

    if(x == 2){
        p1.src = 'IMG/Saks.jpg'
    }
}


function randomImg2() {
    let x = Math.floor(Math.random() *3)

    if(x == 0){
        p2.src = 'IMG/Papir.jpg'
    }

    if(x == 1){
        p2.src = 'IMG/Stein.jpg'
    }

    if(x == 2){
        p2.src = 'IMG/Saks.jpg'
    }
}

// Choice


// p1
const steinbutton = document.querySelector('#steinvelg')
const saksbutton = document.querySelector('#saksvelg')
const papirbutton = document.querySelector('#papirvelg')

steinbutton.addEventListener('click', velgstein)
function velgstein(){
    p1.src = 'IMG/Stein.jpg'
    clearInterval(interval1)
}

papirbutton.addEventListener('click', velgpapir)
function velgpapir(){
    p1.src = 'IMG/Papir.jpg'
    clearInterval(interval1)
}

saksbutton.addEventListener('click', velgsaks)
function velgsaks(){
    p1.src = 'IMG/Saks.jpg'
    clearInterval(interval1)
}



// Poeng

