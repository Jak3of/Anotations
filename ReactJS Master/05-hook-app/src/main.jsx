import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HookApp } from './HookApp.jsx'
// import { CounterApp } from './CounterApp.jsx'
import './style.css'
// import { MemoHook } from './06-memo/MemoHook'
// import { CallbackHooks } from './06-memo/CallbackHooks'
// import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-useReduce/TodoApp'
// import { Memorize } from './06-memo/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { SimpleForm } from './SimpleForm'
// import { FormWithCustomHook } from './FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { CounterWithCurstomHook } from './CounterWithCurstomHook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCurstomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHooks /> */}
    {/* <Padre /> */}
    <TodoApp />
  </React.StrictMode>,
)
