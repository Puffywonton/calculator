import { useState } from 'react';
import './App.scss';
import ButtonsGenerator from './components/ButtonsStuff/ButtonsGenerator';
import BottomDisplay from './components/DisplayStuff/BottomDisplay';
import TopDisplay from './components/DisplayStuff/TopDisplay';

function App() {
  const [userInput, setUserInput] = useState("")

  // const [firstInput, setFirstInput] = useState({
  //   value: "123",

  // })
  // const [secondInput, setSecondInput] = useState({
  //   value: "123",

  // })
  // const [signInput, setsignInput] = useState({
  //   value: "+",

  // })
  //add another userinput

  const [result, setResult] = useState({
    value: "123"
  })

  return (
    <div>
      <h1>calculator</h1>
      <div className="page">
          <div className="outside">
              <div className="display_box">
                  <TopDisplay 
                    value= {userInput}
                  />
                  <BottomDisplay 
                    value= {result.value}/>
              </div>
              <ButtonsGenerator 
              setUserInput = {setUserInput}
              userInput = {userInput}
              />
          </div>
      </div>
    </div>
  );
}

export default App;
