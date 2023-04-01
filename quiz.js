  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
  import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBIJVteLpuRVRNOl8EnPOzAixyfCPr9t-0",
    authDomain: "quiz-43d94.firebaseapp.com",
    databaseURL: "https://quiz-43d94-default-rtdb.firebaseio.com",
    projectId: "quiz-43d94",
    storageBucket: "quiz-43d94.appspot.com",
    messagingSenderId: "432827474867",
    appId: "1:432827474867:web:eb20cfadd8fcd42e01e1c6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db= getDatabase()
  

var question = document.getElementById('question')
var option = document.getElementById('option')
var optionsParent = document.getElementById('optionParent')
var correctAnswer=document.getElementById('correctAnswer')
var options = []
var correctAnswer
    function renderOptions() {
        optionsParent.innerHTML = ``
        for (var i = 0; i< options.length;i++){
            optionsParent.innerHTML += `<li onclick=" setcorrectAnswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`
        }
    }
    window.addOPtion = function () {
        options.push(option.value)
        console.log(options)
        renderOptions()
    }
    window.setCorrectAnswer = function(a){
        correctAnswer = a
        correctAnswerElem.innerHTML = correctAnswer
    }
    window.submitQuestion = function (){
        var obj = {
            question: question.value,
            options: options,
            correctAnswer: correctAnswer
        } 
        const reference = ref(db,'questions/')
        set(reference,obj)
        console.log(obj)
    }









