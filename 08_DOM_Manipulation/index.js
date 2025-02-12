console.log("Hey DOM manipulations");
/*
const weekday = document.querySelector('.weekday')
// console.log(weekday);
// console.log(weekday.children);
// console.log(weekday.children[1].innerHTML);

for (let i = 0; i < weekday.children.length; i++) {
    const element = weekday.children[i].innerHTML
    //console.log(element);
}
weekday.children[1].style.color="orange"
// console.log(weekday.firstElementChild);
// console.log(weekday.lastElementChild);

const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("Nodes",weekday.childNodes); */

const div = document.createElement('div')
console.log(div)
div.className ='main';
div.id = Math.round(Math.random() * 10 +1)
div.setAttribute('title', 'myFirstPage')
div.style.backgroundColor = 'green'
div.style.padding ='12px'
//div.innerText ='DOM Manipulation'
const addText = document.createTextNode('DOM manipulation')
div.appendChild(addText)
// document.body.appendChild(div)
/*-------------------------------------------------------------------- */
function addListItem (langName){
    const li = document.createElement('li')
    li.innerHTML =`${langName}` // happens traversing so not optimized
    //document.body.appendChild(li)
    document.querySelector('.language').appendChild(li)
    console.log(li);
    
}
addListItem('Python')
addListItem('TypeScript')

function addOptiLang(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

addOptiLang('Java')

//Edit
const langInput = document.querySelector('li:nth-child(2)')
// langInput.innerHTML ="Mojo"
const newli = document.createElement('li')
newli.textContent = "Mojo"
langInput.replaceWith(newli)

// edit 2
const langInput2 = document.querySelector('li:first-child')
 langInput2.outerHTML ='<li>Ruby<li/>'

 //remove
 const lastLang = document.querySelector('li:last-child')
 lastLang.remove()


