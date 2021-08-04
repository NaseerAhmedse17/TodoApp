import React from 'react'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { useState } from 'react';

const Todolist=(props)=>{
    const [line, setline] = useState(false);
const Cutit=()=>{
setline(true);
}
return (
    <div className="todo_style">
    <span onClick={Cutit}>
    <DeleteForeverRoundedIcon className="deleteIcon"/>
    </span>
    <li style={{textDecoration:line ? "line-through" : "none"}}>{props.text} </li>
    </div>
)
}
export default Todolist;