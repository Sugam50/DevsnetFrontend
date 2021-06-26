var questions ={
    constructor(a1,a2,a3,a4,ans){
        this.a1=a1;
        this.a2=a2;
        this.a3=a3;
        this.a4=a4;
        this.ans=ans
    },
    set question(ques){
        this.ques=ques;
    },

    get question(){
        return `${this.ques}`;
    }
}


var q1={
    a1:"New Delhi",
    a2:"Chennai",
    a3:"Mumbai",
    a4:"Varanasi",
    ans:"New Delhi"
}
var q2={
    a1:"New Delhi",
    a2:"Prayagraj",
    a3:"Indraprasth",
    a4:"Jhangirpur",
    ans:"Indraprasth"
}
var q3={
    a1:"Kolkata",
    a2:"Surat",
    a3:"Mumbai",
    a4:"Indore",
    ans:"Mumbai"
}

q1.__proto__=questions;
q1.question="What is the Capital of India ?"

q2.__proto__=questions;
q2.question="What is the old name for delhi ?"

q3.__proto__=questions;
q3.question="What is the Business Capital of India ?"

let quiz = document.querySelector('div.quiz');
let next=document.getElementById('next');
let submit=document.getElementById('submit')

let itrat=[q1,q2,q3]


let ques= document.createElement('div');
ques.classList.add('ques')

let ans1=document.createElement('button')
ans1.classList.add('ans');

let ans2=document.createElement('button')
ans2.classList.add('ans');

let ans3=document.createElement('button')
ans3.classList.add('ans');

let ans4=document.createElement('button')
ans4.classList.add('ans');



   
let qno=0;
let i=0;

document.getElementById('q').innerHTML=qno;

if(qno==0){
    document.getElementById('next').innerHTML="Start"
}
else{
    document.getElementById('next').innerHTML="Next"
}


next.addEventListener('click',()=>{
    qno++;
    document.getElementById('next').innerHTML="Next"
    if(qno>3)
    {
        qno=1;
        
    }
    if(qno>0 && qno<4)
    {
        ans1.style.backgroundColor= '#566a7a';
        ans2.style.backgroundColor= '#566a7a';
        ans3.style.backgroundColor= '#566a7a';
        ans4.style.backgroundColor= '#566a7a';

        quiz.appendChild(ques);
        quiz.appendChild(ans1);
        quiz.appendChild(ans2);
        quiz.appendChild(ans3);
        quiz.appendChild(ans4);

       

        ques.innerHTML=itrat[qno-1].question;
        ans1.innerHTML=itrat[qno-1].a1;
        ans1.addEventListener('click',()=>{
           
            if(itrat[qno-1].a1==itrat[qno-1].ans){
                
                ans1.style.backgroundColor='green';
                i++;
            }
            else{
                ans1.style.backgroundColor='red'
                i--;
            }
        })
        ans2.innerHTML=itrat[qno-1].a2;
        ans2.addEventListener('click',()=>{
           
            if(itrat[qno-1].a2==itrat[qno-1].ans){
                
                ans2.style.backgroundColor='green';
                i++
            }
            else{
                ans2.style.backgroundColor='red'
                i--;
            }
        })
        ans3.innerHTML=itrat[qno-1].a3;
        ans3.addEventListener('click',()=>{
           
            if(itrat[qno-1].a3==itrat[qno-1].ans){
                
                ans3.style.backgroundColor='green';
                i++;
            }
            else{
                ans3.style.backgroundColor='red'
                i--;
            }
        })
        ans4.innerHTML=itrat[qno-1].a4;
        ans4.addEventListener('click',()=>{
           
            if(itrat[qno-1].a4==itrat[qno-1].ans){
                
                ans4.style.backgroundColor='green';
                i++;
            }
            else{
                ans4.style.backgroundColor='red'
                i--;
            }
        })

    }
    document.getElementById('q').innerHTML=qno;
    
    
 })

submit.addEventListener('click',()=>{
    alert('Quiz is finised and your score is ' + `${i}`);
    window.location.reload();
})




