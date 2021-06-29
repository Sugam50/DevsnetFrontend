var ull=document.querySelector('ul.l')

window.addEventListener('load', (event) => {
   
    if(localStorage.getItem("task")==null){

    }
    else{
        
        ull.innerHTML= localStorage.getItem("task")
    }
  });


if(localStorage.getItem("task")==null){
    var lis="";
}
else{
    var lis=localStorage.getItem("task");
}
function deleteit(a){
   
   a.remove();
   localStorage.removeItem("task");
    lis = document.querySelector('ul.l').innerHTML;
   localStorage.setItem("task",lis);
  
}

function addit(x){
   if(x.code=="Enter"){
     additem();
   }
}

function additem(){
    var inp=document.getElementById('aditem').value;

    var saveit=`<li onclick="deleteit(this)" ><i class="fa fa-trash" aria-hidden="true"></i> <span>${inp} </span></li>`
        if(inp)
        {   
             ull.innerHTML+=saveit;
           
            lis+=saveit;

            localStorage.setItem("task",lis);
        }
        else
        {
            alert("enter a task")
        }
}
