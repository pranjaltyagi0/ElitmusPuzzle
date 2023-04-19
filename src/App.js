import React, { useEffect, useState } from "react";
import Quiz from "./Pages/Quiz";
import "./App.css";
import Ans from "./Pages/Ans";

const App = () => {
  
  const [num, setnum] = useState(0);

  const [score, setscore] = useState(0);
  const [attempt, setattempt] = useState(1);

  const increment = () => {
    setattempt(attempt + 1);
  };
  const scoreincrement = () => {
    setscore(score + 1);
  };

  const numincrement = () => {
    setnum(num + 1);
  };

  

  let riddles = [
    {
      ques: "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I ? ",
      ans: "pencil lead",
    },
    {
      ques: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      ans: "map",
    },
    {
      ques: "I am light as a feather, yet the strongest man cannot hold me for much more than a minute. What am I?",
      ans: "Breath",
    },
    {
      ques: "The more you take, the more you leave behind. What am I?",
      ans: "Footprints",
    },
    {
      ques: "I am not alive, but I grow; I don't have eyes, but you can see me glow. What am I?",
      ans: "Fire",
    },
    {
      ques: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      ans: "map",
    },
    {
      ques: "I am light as a feather, yet the strongest man cannot hold me for much more than a minute. What am I?",
      ans: "Breath",
    },
    {
      ques: "The more you take, the more you leave behind. What am I?",
      ans: "Footprints",
    },
  ];

  return (
    <div className="quizes">
      {attempt >= 4 ? (
        score >= 3 ? (
        <Ans show={"Win"} /> ) : (<Ans show={"Loss"} score={score} /> )
      ) : (
        num + 1 && (
          <div className="quiz-box1">
            <h1> {attempt}/3</h1>
            <Quiz
              increment={increment}
              scoreincrement={scoreincrement}
              ques={riddles[num].ques}
              ans={riddles[num].ans}
              numincrement={numincrement}
            />
          </div>
        )
      )}
    </div>
  );
};

export default App;
