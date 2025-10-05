import {getTodoList} from "../../apis/todoApi.tsx";
import {useEffect, useState} from "react";

const initState:PageResponse<Todo> = {
    dtoList: [],
    total: 0,
    size: 0,
    end: 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}

function TodoList() {

    const [data, setData] = useState<PageResponse<Todo>>(initState)

    const [page, setPage] = useState<number>(1)

    //비동기 호출 서버 죽고 무한 반복 호출이 발생한다... 비동기 호출이기 때문에
    //getTodoList().then(result => setData(result))

    //useEffect 쓰는 방법 -- react query 사용
    useEffect(() => {
        getTodoList().then(result => setData(result))
    }, []); // []의 경우는 컴포넌트가 로딩되면 한 번 호출

    //서버에서 렌더링 처리 방법 - Next, Remix

    return (
        <div>
            <h1 onClick={() => {

                setPage(page + 1)

            }}>Todo List {page}</h1>

            <ul>
                {data.dtoList.map( todo => <li key={todo.tno}> {todo.tno} </li> )}
            </ul>

        </div>
    );
}

export default TodoList;