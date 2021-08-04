import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { useState } from 'react';
import { AlternateEmail } from '@material-ui/icons';
import Todolist from './Components/Todolist';


function App() {
  const [text, settext] = useState('');
  const [list, setlist] = useState([])

  const Textchanged=(event)=>{
   settext(event.target.value);
  }
  const BtnClicked=()=>{
    setlist((oldval)=>{
     if(text!=="") 
     return [...oldval, text];
     else
     return [...oldval,"null"];
    })
    settext('');
  }
  return (
    <React.Fragment>
    <div className="main_div"> 
    <div className="center_div">
    <br/>
    <h1>Todo App Lists</h1>
    <br/>
    <input type="text" placeholder="add item" value={text} onChange={Textchanged}/>
    <Button style={{backgroundColor: 'skyblue',borderRadius:'250px' }} onClick={BtnClicked} >
    <AddCircleRoundedIcon/>
    </Button>
    <ol>
     {list.map((newArray,index)=>{
       return (
         <Todolist text={newArray} key={index}/>
       )
     })
    }
    </ol>
    </div>
    </div>
    
    
    </React.Fragment>
  );
}

export default App;
