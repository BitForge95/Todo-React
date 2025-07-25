import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';


function App() {
  
  const [inputValue, setInputValue] = useState("")
  const [inputArray, setInputArray] = useState([])

    const handleSubmit = () => {
        if(inputValue.trim() === ""){
            alert("Please enter a Todo")
        } else {
          setInputArray([...inputArray, inputValue.trim()]);
          setInputValue('');
        }
    }

    
    return (
        <div className="App">
            <h1 className="H1">Plan your Day with out Todoer</h1>
            <div>
              <div className='Input-Todo'>
                <input className="input" type='text' placeholder='eg: Go to Gym' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type='button' onClick={handleSubmit}>Let's Go</button>
              </div>
              <Todo array={inputArray} />
            </div>
        </div>
    )
}

export default App;
