import React, {useState} from 'react';
import {useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import  { createTodo } from "../redux/modules/todos";

const Subpage1 = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [name, setName] =useState("")


    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todos.todos)

    const onCreate = () => {
        dispatch(createTodo({id: todos.length+1, title, name, content}))
    }

    const onClickButton=()=> {
        if(title !== '' && content !==''){
            onCreate()
            setTitle('')
            setContent('')
            setName('')
        }
    }
    const navigate = useNavigate()
    
    return(
        <>
            <div onClick={()=> {navigate("/")}}>Home</div> 
            <div>
                <h3>작성하기</h3>
                <div>
                    <label>이름</label>
                    <input type= "text" value={name} onChange={e=>{setName(e.target.value)}}></input>
                </div>
                <div>
                    <label>제목</label>
                    <input type= "text" value={title} onChange={e=>{setTitle(e.target.value)}}></input>
                </div>
                <div>
                    <label>내용</label>
                    <input type= "text" value={content} onChange={e=>{setContent(e.target.value)}}></input>
                </div>
                <button onClick={()=> {
                    onClickButton()
                    navigate("/subpage2")
                }}>추가하기</button>
           
            </div>

            
        </>
    )
}

export default Subpage1