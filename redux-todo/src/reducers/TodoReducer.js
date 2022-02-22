 const TodoReducer = (state ={todos: []}, action) =>{
    switch(action.type){
        case "Add_TODO":
            return {todos: action.payload };
        case "Remove_TODO":
            return {todos: action.payload} ;
        default:  
            return state;
    }
};
export default TodoReducer