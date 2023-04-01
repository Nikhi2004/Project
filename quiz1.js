const questions= [
    {
        question:"Q1:How many years did it take to build the Taj Mahal",
        a:"20 years",
        b:"10 years",
        c:"5 years",
        d:"none of the above",
        ans:"opt1"
        

        
    },
    {
        question:"Q2:Which big cat is the largest. ",
        a:"Tiger",
        b:"Lion",
        c :"Liger",
        d:"jaguar",
        ans:"opt3"
    },
    {
        question:"Q3:India International Science Festival 2018 was held in  ",
        a:"New Delhi",
        b:"Lucknow",
        c:"Bengaluru",
        d:"Kolkata",
        ans:"opt2"
    },
    {
        question:"Q4:How many bones do we have in a ear? ",
        a:"4",
        b:"3",
        c:"5",
        d:"2",
        ans:"opt2"
    },
];
const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');
const options = document.querySelectorAll('.option');
const showScore=document.querySelector('#showScore');
const countdown=document.querySelector('#countdown');

let duration=0;
let counter
let questioncount=0;
let score=0;

const loadQuestion = () => {
    const questionList = questions[questioncount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
function load() {
    starttimer(9)
}

loadQuestion();
load();
const getCheckAnswer=()=>{
    let answer;
    options.forEach((curAnsElem) => {
      if (curAnsElem.checked) {
         answer=curAnsElem.id;  
      }
      
  });
  return answer;
};


    function starttimer(time){
        counter=setInterval(timer,1000);
        function timer(){
           countdown.textContent= time;

            time--;
            if(time==-1 && questioncount==questions.length-1){
           
                document.querySelector(".quiz-header").style.display='none'
               
                showScore.innerHTML=`<h3> You scored ${score}/${questions.length}</h3>`;
                clearInterval(counter);
               
            }
            else if(time==-1 && questioncount<questions.length){
                clearInterval(counter);
                questioncount++;
                loadQuestion();
                nxt_question();
            }
        }
   
    }
    function nxt_question(){
        if( countdown.innerHTML=='0'){
            clearInterval(counter);
            starttimer(9);
        }
    }
 

    submit.addEventListener('click',function(){
        const checkedAnswer=getCheckAnswer();
        clearInterval(counter)
        starttimer(9)
        console.log(checkedAnswer);
          if(checkedAnswer=== questions[questioncount].ans){
            score++;
          };
          questioncount++;
       
          if(questioncount<questions.length){
           
            loadQuestion();
            nxt_question()
            
          }else{
              showScore.innerHTML=`<h3> you scored ${score}/${questions.length}</h3>`
              clearInterval(counter);
              document.querySelector(".quiz-header").style.display='none'

          }})
         

    
     

