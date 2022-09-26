
import {  useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
    <Counter></Counter>
    </div>
  )
  }

 function Counter (){
  const [count, setCount] = useState(0)
const handleIncrese = () => {
  const counts = count + 1;
  setCount(counts)
}
  return(
    <div>
      <h1>counter: {count} </h1>
      <button onClick={handleIncrese}>Increse</button>
    </div>
  )
 }

export default App;
