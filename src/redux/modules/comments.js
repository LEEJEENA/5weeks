// Action value
const CREATE_TODO2 = "CREATE_TODO2"

// Action value
export const createTodo2 = (payload) =>{
    return {
        type:CREATE_TODO2, 
        payload,}
}

// initial State

const initialState = {
   comments: []
}


// Reducer

const comments =(state= initialState, action) => {
    switch(action.type) {
        case CREATE_TODO2 :
            return {
                ...state,
                comments : [...state.comments, action.payload]
            }

        default:
            return state;
    }   
}


export default comments