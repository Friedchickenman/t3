import {type ChangeEvent, useState} from "react";

const initState:Todo = {
    title: 'Title',
    writer: 'writer'
}


function TodoAdd() {

    const [todoAdd, setTodoAdd] = useState(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target
        //새로운 객체를 만듬
        setTodoAdd( {...todoAdd, [name]: value} )
    }

    return (
        <div>
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
            <button >SEND</button>
            </div>
        </div>
    );
}

export default TodoAdd;