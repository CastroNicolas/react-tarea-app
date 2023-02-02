
const inicialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]


const toDoReducer = (state = inicialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return[
            ...state, action.payload
        ]
    }

    return state;
}

let todos = toDoReducer()

const newToDo = {
    id: 2,
    todo: 'comprar leche',
    done: false
}

const addToDoAction = {
    type: '[TODO] add todo',
    payload: newToDo
}

todos = toDoReducer(todos, addToDoAction)

console.log(todos)