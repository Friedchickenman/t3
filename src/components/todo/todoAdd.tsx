import {type ChangeEvent, useState} from "react";
import {postTodo} from "../../apis/todoApi.tsx";

const initState:Todo = {
    title: 'Title',
    writer: 'writer'
}


function TodoAdd() {

    const [todoAdd, setTodoAdd] = useState(initState)
    const [fetching, setFetching] = useState(false)
    const [result, setResult] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target
        //새로운 객체를 만듬
        setTodoAdd( {...todoAdd, [name]: value} )
    }

    const handleClick = () => {

        setFetching(true)

        setTimeout(() => {

            postTodo(todoAdd).then(tnoResult => {
                setFetching(false)
                setResult(tnoResult)
            })

        },3000)

    }

    return (
        <div>
            {result !== 0 && <h1> RESULT: {result}</h1> }

            {fetching && <h1>Fetching.................</h1>}

            <h1> Todo Add </h1>

            <div>
                TITLE
                <input type='text' name='title' value={todoAdd.title} onChange={handleChange}></input>
            </div>

            <div>
                WRITER
                <input type='text' name='writer' value={todoAdd.writer} onChange={handleChange}></input>
            </div>
            <div>
            <button onClick={handleClick}>SEND</button>
            </div>
        </div>
    );
}

export default TodoAdd;