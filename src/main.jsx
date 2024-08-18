import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoApp } from './08-introReducer/TodoApp';

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './UseState/CounterApp'
// import { CounterWithCustomHooks } from './UseState/CounterWithCustomHooks'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { FormWithCustomHooks } from './useEffect/FormWithCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './05-memo/Memorize'
// import { CallbackHook } from './05-memo/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-introReducer/useReducer';
// import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
