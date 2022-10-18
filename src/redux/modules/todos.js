// Action value
const CREATE_TODO = "CREATE_TODO"
const DELETE_TODO = "DELETE_TODO"
const EDIT_TODO ="EDIT_TODO"

// Action value
export const createTodo = (payload) =>{
    return {
        type:CREATE_TODO, 
        payload,}
}


export const deleteTodo = (payload)=> {
    return {
        type: DELETE_TODO,
        payload,
    }
}

export const editTodo = (payload)=> {
    return {
        type: EDIT_TODO,
        payload,
    }
}


// initial State

const initialState = {
    todos : [
        // {
        //     id : 1,
        //     title : "오늘의 할일",
        //     name : "line",
        //     content : "오늘은 참 힘들 날이다."
        // }
    ]
}

// Reducer

const todos =(state= initialState, action) => {
    switch(action.type){

        //글 내용 추가하기 버튼
        case CREATE_TODO :
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        //삭제하기 버튼
        case DELETE_TODO :
          
            return {
                ...state,
                todos : [...state.todos.filter(todo => {
                    return todo.id !== action.payload
                })]
            }
        
        //글 수정 추가하기 버튼
        case EDIT_TODO :
            console.log(state.todos[todos.length].content) // 원래 내용 나옴
            console.log(action.payload[todos.length+1]) //입력한 내용 나옴
            
            return {
                ...state,
                todos: action.payload
            }

        
        default:
            return state;
    }
}

export default todos