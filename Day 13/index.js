var btn = document.querySelector("button")

var container=document.querySelector(".container")


btn.addEventListener("click",async ()=>{
   var a= await fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data =>data.content)
    
    var div=document.createElement('div')
   
    div.classList.add("quotes")
    div.innerHTML=a;
    container.appendChild(div)
    
})