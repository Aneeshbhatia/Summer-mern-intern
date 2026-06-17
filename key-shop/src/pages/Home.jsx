import { useState } from "react";
function Home() {
  const [counter, setCounter]=useState(0);
  const [btnText, setbtnText]=useState('hello');
  return (
    <div className="page">
      <h1>Welcome to Key Shop</h1>
      <h2>current value of counter is:{counter}</h2>
      <p>Your one-stop destination for all types of key rings!</p>
      <button onClick={()=>setCounter(counter+1)}>click me</button>
      
        <br>
        </br>
      <button onClick={()=>setbtnText ('bye')}>{btnText}</button>
      </div>

  );
}

export default Home;