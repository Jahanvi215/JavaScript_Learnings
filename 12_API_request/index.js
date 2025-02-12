const url = 'https://api.github.com/users/jahanvi6058'
const xhr = new XMLHttpRequest()
xhr.open('GET',url)
console.log("hey API", xhr);
console.log(xhr.status);
let userBtn = document.getElementById('user-btn')
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        const username= data.name
        const image = data.avatar_url
        console.log(data);
        console.log(data.created_at);
        userBtn.addEventListener('click',(e)=>{
            console.log(e);
            
            userBtn.innerHTML = `
            <div class="card">
       <img src=${image} alt="Avatar" style="width:200px">
        <div class="container">
         <h4><b>${username}</b></h4>
         <a href=${data.url}>Github url</a>
  </div>
</div>`
        })
        
    }
    
}

xhr.send()