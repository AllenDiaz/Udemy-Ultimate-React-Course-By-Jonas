import { useState, useEffect } from "react";
function App() {

const [advice, setAdvice] = useState("");
const [count, setCount] = useState(0);

async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1 );
  }
  useEffect(() => {
    getAdvice();
  }
  , []);
  return (
    <div>
    <h1>{advice}</h1>
    <button onClick={getAdvice}>Get Advice</button>
    <Message count = {count}/>
  </div>
  ) 
  
}

function Message(props) {
  return (
    <p>
      You have read <strong>{ props.count }</strong> piece of advice
    </p>
  )
}


export default App
