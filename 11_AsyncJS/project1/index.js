//generate random bg colors

const randomColor = function(){
    const hex = "0123456789abcdef"
    let color ='#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor((Math.random()) *16)]
    }
    return color;
}


let intervalId
const startColorChange = function(){
    if (!intervalId) {
        intervalId = setInterval(startChange, 1000)
    }
    function startChange(){
        document.body.style.backgroundColor = randomColor()
        console.log(randomColor());
        // document.querySelector('#para').innerHTML=`${randomColor()}`
        // console.log(randomColor(), 22);
        
        }
        
}

const stopColorChange = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startColorChange)
document.querySelector('#stop').addEventListener('click', stopColorChange)
console.log(randomColor());