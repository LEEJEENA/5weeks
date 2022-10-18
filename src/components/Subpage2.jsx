import {useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import  { deleteTodo } from "../redux/modules/todos";
const Subpage2= ()=> {
    const navigate = useNavigate()
    const {todos} = useSelector((state) => state.todos)
    
    const dispatch = useDispatch();

    const deleteButton = (payload) =>{
        dispatch(deleteTodo(payload))
    }
    

    return (
        <>
            <div onClick={()=> {navigate("/")}}>Home</div> 
            
            <hr/>

            {todos.length !==0 ? (
                todos.map(todo=>(
                    <div key={todo.id}>
                        <button onClick={()=>deleteButton(todo.id)}>삭제하기</button>
                        <div onClick={()=> {navigate("/content2/"+todo.id)}}>제목 : {todo.title}</div>
                        <hr/>
                    </div>
                    ))
            ) :
            (<div>
                할일이 없네요.
            </div>)}
        </>
    )
}

export default Subpage2;