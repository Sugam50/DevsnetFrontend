let word=["A","B","C","D","E","F","G","H"];
let words=[...word,...word];
let gameact=true;

let container = document.getElementById('container');
let grid=document.getElementById('grid');

for(let i=1;i<=16;i++){
    let card = document.createElement('div');
    card.classList.add('card');
  
    let inner = document.createElement('div');
    inner.classList.add('inner');

    let front = document.createElement('div');
    front.classList.add('front');

    let back = document.createElement('div');
    back.classList.add('back');

    let rndm = Math.floor(Math.random()*(16-i));

    back.innerHTML="<h1>" + words[rndm] +"</h1>";

    words.splice(rndm,1);
    
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    grid.appendChild(card);
 
}


var remmoves=30;
var matches=0;

let Data;
var cards = document.querySelectorAll("div.card");

cards.forEach(c => {

    c.addEventListener('click',()=>{
        
        if(!gameact)return;
        remmoves--;
        document.getElementById('rem_moves').innerHTML=remmoves;

        if(Data){
            c.firstChild.classList.add('flipped')
            gameact=false;

            setTimeout(() => {

                if(c.firstChild.lastChild.innerHTML!==Data.firstChild.lastChild.innerHTML)
                {
                    c.firstChild.classList.remove('flipped');
                    Data.firstChild.classList.remove('flipped');
                  
                }
                else{
                    matches++;
                    c.style.visibility="hidden";
                    Data.style.visibility="hidden";
                    document.getElementById("matches").innerHTML=matches;
                    
                }
                Data=undefined;
                gameact=true;
                
            }, 500);
        
        }
        else{
            Data=c;
            c.firstChild.classList.add('flipped')
            

        }
    })
});

setInterval(() => {
    if(matches===8){
      location.reload();
        
    }
    if(remmoves===0){
        location.reload();
        
    }
    
}, 100);

