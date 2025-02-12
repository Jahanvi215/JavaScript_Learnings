// document.getElementById("flower").onclick = function(){
//     alert("Flower clicked")
// }  //not a good appraoch because it will not give full information
/*
document.getElementById("images").addEventListener('click', function(e){
    console.log("clicked inside ul");    
})
document.getElementById("flower").addEventListener('click', function(e){
    // console.log(e.timeStamp);
    // console.log(e.shiftKey);
    console.log("flower clicked");
    e.stopPropagation()
})

document.getElementById("google").addEventListener('click', function(e){
    e.preventDefault()
    console.log("ggogle clicked");  
})*/
/*what to study
type, timeStamp, defaultPrevented, target, toElement, srcElement, currentTarget,
clientX, clientY, screenX, screenY
altKey, ctrlKey, shiftKey, keycode */

//project
document.querySelector("#images").addEventListener('click', function(e){
    e.preventDefault()
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})