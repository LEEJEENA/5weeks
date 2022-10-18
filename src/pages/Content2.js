import {useNavigate, useParams  } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import React, {useState} from 'react';
import  { createTodo2 } from "../redux/modules/comments";
import Content3 from "./Content3";

const Content2 =()=> {

    //navigate
    const navigate = useNavigate()

    //filter에 사용할 todos와 id 불러오기
    const todos = useSelector((state)=> state.todos.todos)
    const {id} = useParams()
    
    // 댓글 작성
    const comments = useSelector((state)=> state.comments.comments)
    const [comment, setComment] = useState();
    const dispatch = useDispatch();

    const onCreate2 = () => {
        dispatch(createTodo2({id: comments.length+1, comment}))
    }

    const onClickButton2= () => {
        if(comment !== ''){
            onCreate2()
            setComment('')
        }
        
    }


    return(
        <>
        <div onClick={()=> {navigate("/")}}>Home</div> 
        {
            todos.filter(todo=> todo.id === Number(id))
            .map((todo, i) => (
                <div key={todo.id}>
                    {/* <div onClick={()=> {navigate("/content3")}}>수정하기</div> */}
                    <Content3 idx={i} todo={todo}/>
                    <div>제목 : {todo.title}</div>
                    <div>아이디 : {todo.name}</div>
                    <div>내용 :{todo.content}</div>
                </div>
            ))
            
        }
        <hr/>
        <div>
            <input type="text" placeholder="댓글달기" value={comment} onChange={(e)=> {setComment(e.target.value)}}/>
            <button onClick={()=> {onClickButton2()}}>추가</button>
        </div>

        {comments.map(comment => (
                <div>
                    <div>{comment.comment}</div>
                </div>
            ))
        }
        </>
    )
}

export default Content2