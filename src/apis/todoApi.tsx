import  {AxiosResponse} from "axios";
import * as axios from "axios";



export function getTodo( ): Promise<AxiosResponse<Todo>> {

    const res = await axios.get(``)

    return res.data

}