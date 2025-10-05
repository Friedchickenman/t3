import {postTodo} from "../../apis/todoApi.tsx";
import {useActionState} from "react";

async function submitAction (prevState: unknown, formData:FormData):Promise<number> {

    console.log(prevState, formData)

    const todoObj: Todo = {title: 'AAA', writer: 'psj'}

    return postTodo(todoObj)
}

function TodoAdd2() {

    const [state, formAction, isPending] = useActionState(submitAction, 0)

    console.log(state, formAction, isPending)

    return (
        <div>
            <h1>Todo Add2</h1>
            <form>

            </form>
        </div>
    );
}

export default TodoAdd2;