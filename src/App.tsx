import './App.css'
import TodoList from "./components/todo/todoList.tsx";
import {useState} from "react";
import TodoAdd2 from "./components/todo/todoAdd2.tsx";


function App() {

    const [key, setKey] = useState(1)

    console.log(setKey)

    // const changeKey = () => {
    //     setKey(key + 1)
    // }

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
        <TodoAdd2></TodoAdd2>
        <TodoList key={key}></TodoList>
    </>
  )
}

export default App
