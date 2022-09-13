let hScore = 0
let gScore = 0

function add1H(){
    document.getElementById("home-el").textContent = hScore + 1
    hScore++
}

function add1G(){
    document.getElementById("guest-el").textContent = gScore + 1
    gScore++
}

function add2H(){
    document.getElementById("home-el").textContent = hScore + 2
    hScore+= 2
}

function add2G(){
    document.getElementById("guest-el").textContent = gScore + 2
    gScore+= 2
}

function add3H(){
    document.getElementById("home-el").textContent = hScore + 3
    hScore+= 3
}

function add3G(){
    document.getElementById("guest-el").textContent = gScore + 3
    gScore+= 3
}

let period = 1
function addPeriod(){
    if(period < 4){
        document.getElementById("periodText").textContent = period + 1
    period++
    }
    
}