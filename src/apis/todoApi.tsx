import axios from "axios";




export async function getTodo(tno: number): Promise<Todo> {

    try {
    const res = await axios.get(``)
    return res.data
}catch(err) {
        console.log(err)
        throw Promise.reject("Data Not Found")
    }
}