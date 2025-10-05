import './App.css'
import TodoAdd from "./components/todo/todoAdd.tsx";


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
        <TodoAdd/>
    </>
  )
}

export default App
