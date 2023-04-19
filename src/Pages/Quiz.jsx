import React, { useEffect, useState } from 'react';


const Quiz = ({ques, ans, increment, scoreincrement, numincrement}) => {
  
    const [answer, setanswer] = useState("")
    const [answered, setanswered] = useState(false)
    const [result, setresult] = useState(null)
    const [show, setshow] = useState("")


    useEffect(() => {
        console.log(ques, ans)
        setresult(null);
        setshow("");
        setanswer("");
        setanswered(false);

    }, [])
    
    const handelnext = () =>{
        increment();
        numincrement()
        setresult(null);
        setshow("");
        setanswer("");
        setanswered(false);

    }

    const handelsubmit = () =>{
        let check = answer.toLowerCase().includes(ans.toLowerCase());
        if(answer==""){
            setshow("Please Insert Some Innput");
        }
        else if(check || answer==ans){
            const points = JSON.parse(localStorage.getItem("points"));
            localStorage.setItem("points",JSON.stringify(points+1));
            setshow("Correct answer")
            setanswered(true);
            setresult(true);
            scoreincrement();
            // increment();

        }   
        else if(answer!==ans && !check){
            setshow("Wrong answer")
            setanswered(true);
            setresult(false);
            // increment();
        }   
    }

    return (
    
    <div className='quiz-box'>
        <h1 className='quiz-h'> { ques } </h1>
        <input className='quiz-i' type="text" name="ans" value={answer} onChange={(e)=> setanswer(e.target.value)}  id="ans"/>
        <button className={` quiz-b ${result ? "disable" : ""}  `} onClick={handelsubmit} disabled={answered} type="submit" > Submit </button>
        <div className={`sub-btn ${answered ? "show" : "hide"} ${result ? "correct":"wrong"}`} > { show } </div>
        <div className='btns'>
            {/* <button className='btn refresh-btn' onClick={handelrefresh}> Refresh </button>  */}
            <button className='btn refresh-btn' onClick={handelnext}> Next </button> 
        </div>
    </div>
  )
}

export default Quiz