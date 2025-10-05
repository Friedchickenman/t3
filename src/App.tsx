import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./components/todo/todoList.tsx";


function App() {

    //const todo:Todo = {title: "React로 생성하는 Todo", writer:"psj"}

    // postTodo(todo).then((result:number) => {
    //     console.log(result)
    // })


    // updateTodo(, "React Update 000").then((result:Todo) => {
    //     console.log(result)
    // })

    // getTodoList().then((result: PageResponse<Todo>) => {
    //     console.log(result.total)
    // })

    // getTodo().then((result: Todo) => {
    //     console.log(result)
    // }).catch( reason => {
    //     console.log(reason)
    // })

  return (
    <>
        <TodoList/>
    </>
  )
}

export default App
