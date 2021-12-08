import logo from './logo.svg';
import './App.css';
import data from './storySteps.json';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  console.log(data.steps[0]);
  const [currQuestion, setCurrQuestion] = useState(data.steps[0])
  return (
    <div className="App">
      <header className="App-header">
        <p style={{paddingLeft:100, paddingRight:100}}>
          {currQuestion.question}
        </p>
       
        <div className="d-grid gap-2">
  <Button variant="light" onClick={()=>{setCurrQuestion(data.steps[currQuestion.choices[0].goto])}}>
  {currQuestion.choices[0].choice}
  </Button>
  {currQuestion.choices.length > 1 && 
  <Button variant="secondary" onClick={()=>{setCurrQuestion(data.steps[currQuestion.choices[1].goto])}}>
  {currQuestion.choices[1].choice}
  </Button>
}
</div>
        
        
      </header>
    </div>
  );
}

export default App;
