import React, { useState } from 'react'
import "./App.css"


const Quiz = () => {
    const questions = [
        {
          question: "What is React Js?",
          answers: [
            {
              answer: "It is a framework of Javascript",
              correct: false,
            },
            {
              answer: "It is a library of Javascript",
              correct: true
            },
            {
              answer: "It is a programming language of web Development",
              correct: false,
            },
            {
              answer: "It is a framework of Node js",
              correct: false,
            },
          ],
        },
      
        {
          question: "What are hooks in React Js?",
          answers: [
            {
              answer:
                "They offer us to use state and other React features without writing a class.",
              correct: true,
            },
            {
              answer: "Its a part of class component",
              correct: false,
            },
            {
              answer:
                "It is the process of following imported files and merging them into a single file",
              correct: false,
            },
            {
              answer: "none of these",
              correct: false,
            },
          ],
        },
        {
          question: "What are HOC in React Js?",
          answers: [
            {
              answer: "They are higher-order component function ",
              correct: true,
            },
            {
              answer:
                "They are class component which render after updating the state",
              correct: false,
            },
            {
              answer: "It is a programming language of web Development",
              correct: false,
            },
            {
              answer: "All of the above",
              correct: false,
            },
          ],
        },
        {
          question: "What is promises in Javascript",
          answers: [
            {
              answer: "It is a Javascript feature to handle aysnc calls",
              correct: false,
            },
            {
              answer: "It takes two arguments as a parameter ",
              correct: false,
            },
            {
              answer:
                "A placeholder for an asynchronous task which is yet to be completed",
              correct: false,
            },
            {
              answer: "All of the above",
              correct: true,
            },
          ],
        },
        {
          question: "who develop React Js?",
          answers: [
            {
              answer: "Yahoo",
              correct: false,
            },
            {
              answer: "Google",
              correct: false,
            },
            {
              answer: "JP morgn",
              correct: false,
            },
            {
              answer: "None of the above",
              correct: true,
            },
          ],
        },
      ];
      
const [inital,setInitail]=useState(0);
const [scoreCard,setCard]=useState(false);
const [right,setRight]=useState(0);
const [wrong,setWrong]=useState(0);


const onclickAnswer=(correct)=>{
 
    if(correct===true){
        let temp=right+1;
        setRight(temp);
    }
    else{
        let temp=wrong+1;
        setWrong(temp);
    }
    const next=inital+1;
    if(next<questions.length){
        setInitail(next);

    }
    else{
       setCard(true);
    }

  
}
  return (
    
        
    <div className='container'>
{ 
     scoreCard? (<div className="scoreCard">
        {right-wrong<1 && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk19_JBZaxVKvbOsZt1KwmiX8uQmP7kvKsw&usqp=CAU"/>
         }
    {
       (right-wrong>=1 && right-wrong<3) &&      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSRJxtTm9nHVD7Zt8y2NRt5BvInud6g7a3Q&usqp=CAU'/>
    }
    {
        right-wrong===5 && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqttlPeYxHHW9W346tRES45SCBJ8vhF10vAA&usqp=CAU'/>
    
    }

        <h1>Score Card</h1>
        <span>Your {right} are correct
     answers ,{wrong} are wrong answers </span>
     <h3>Total Score is: {right-wrong}</h3> 
     </div>)
     :(<>
      <div className='question-box'>
  <div className='question-number'>
  Question {inital+1}/{questions.length}:
  </div>
  <div className='question-text'>

        {questions[inital].question}
  </div>
        </div>
     
      <div className='answer-box' >
        {
            questions[inital].answers.map((item,i)=>
            (
                <button onClick={()=>onclickAnswer(item.correct)}>{i+1}: {item.answer}</button>
            )
            )
        }

      </div>
      </>
)}

    </div>

  )
}

export default Quiz