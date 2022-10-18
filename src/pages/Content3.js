import { useState } from "react"
import { useSelector, useDispatch} from "react-redux";


const Content3 = ({todo})=> {

    //todos 불러오기
    // const todos = useSelector((state)=> state.todos.todos)

    const [edit, setEdit] = useState(false)
    const [target, setTarget] =useState(todo.content)
    const [todo2, setTodo2] = useState("")
    const [editTodo, setEditTodo] = useState({
      
    })


    
    //console.log(todo.content,"todo.content")
    //console.log(todos)
   // console.log(target, "타겟")

    const onClickUdapte =() => {
        let copy = {...todo, content: todo2}
       // console.log(copy, "copy")
       setEditTodo(copy.content)
       console.log(editTodo)
    }

    //const {id} = useParams()
    const toggleEdit = () => {setEdit(!edit)}

    const toggleUdate = () => {
        if(target===""){
            return alert ("내용이 없습니다.")
        }else{
            onClickUdapte()
            setEdit(false)
        }
        
    }
    
    
    return (
        <>

    
            {
                edit ? (<>
                <div>제목 : {todo.title}</div>
                <label>내용</label>
                <textarea onChange={(e)=> {setTodo2(
                    {...todo2, 
                    content : e.target.value}
                )}}/>
                </>) : (
                    <div>
                        {editTodo}
                    </div>
                )
            }
            <div>
                {
                   edit ? (<button onClick={onClickUdapte}>저장</button>) :(<button onClick={()=>{toggleEdit()}}>수정하기</button>)
                }
            </div>
            <br/>
            


     
           
        </>
    )
}

export default Content3