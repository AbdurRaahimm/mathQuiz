import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Add() {
    const [Quiz, setQuiz] = useState({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        dummyAns1 : Math.floor(Math.random() * 10),
        dummyAns2 : Math.floor(Math.random() * 10),
        ans: 0,
        score: 0,
        time: 30,
        allAnswers : [],
    });

    const generate_equation = () =>{
       setQuiz((prevQuiz)=>{
        const newNum1 = Math.floor(Math.random() * 10);
        const newNum2 = Math.floor(Math.random() * 10);
        const newAns = eval(newNum1 + newNum2);
        const newAllAnswers = [newAns, prevQuiz.dummyAns1, prevQuiz.dummyAns2];
        newAllAnswers.sort(() => Math.random() - 0.5);
    
        return {
          ...prevQuiz,
          num1: newNum1,
          num2: newNum2,
          ans: newAns,
          allAnswers: newAllAnswers,
        };
       })

    }
    useEffect(()=>{
        generate_equation();
        // start timer and reduce if time 0 then make score is 0 and again reduce time from start  and alert score 
        const timer = setInterval(() => {
            setQuiz((prevQuiz)=>{
                if(prevQuiz.time > 0){
                    return {
                        ...prevQuiz,
                        time: prevQuiz.time - 1,
                    };
                }else{
                    // alert score and time  
                    alert(`You Complete ${prevQuiz.score} within ${Quiz.time} seconds` )
                    return {
                        ...prevQuiz,
                        time: 30,
                        score: 0,
                    };
                }
            })
        }, 1000);
        // clear timer
        return () => {
            clearInterval(timer);
        };

    },[])

    const submitAns = (e) =>{
        // if ans is correct then generate equation and and is wrong then dont generate equation
        if(e.target.innerText == Quiz.ans){
            Quiz.score++;
            generate_equation();
        }else{
            // alert("wrong answer");
            // new Audio('https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3').play();
            new Audio('/wrong.mp3').play();
            // scrore is 0 
            // Quiz.score = 0;
        }      

    }



    return (
        <div className='bg-[#065947] h-screen border-[8px] rounded-xl border-yellow-400 '>
            <Link to={`/`} className='m-8 mt-10 text-white  capitalize'> 
                <svg className='w-6 m-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg> 
                {/* back */}
            </Link>
            <div className='flex justify-center items-center flex-col space-y-4  md:space-y-10'>
               <div className="flex justify-between md:gap-14 flex-col md:flex-row text-sm">
               <div className='text-white text-4xl text-center md:text-8xl font-Luckiest'> Score : {Quiz.score} </div> 
                <div className='text-white text-4xl text-center md:text-8xl font-Luckiest'> Time : { Quiz.time} </div>
               </div>

                <div className='text-white text-8xl font-Luckiest flex flex-col text-center md:flex-row justify-between'> 
                    <span> {Quiz.num1} + {Quiz.num2} = </span>  
                    <span className='bg-[#003124] px-10 border-[8px] border-[#3E8777] rounded-3xl ml-4'> ? </span>
                </div>

                <div className=" space-x-8">
                    {
                        Quiz.allAnswers.map((answer,i) => (
                            <button onClick={submitAns} key={i} className='bg-[rgb(167,182,29)] text-white text-5xl font-Luckiest rounded-xl px-7 py-5 md:px-10 md:py-6 '>{answer}</button>
                        ))
                    }
                    
                </div>
            </div>
        </div>

    )
}
