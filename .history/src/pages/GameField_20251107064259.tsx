import Loading from "@/components/Loading"
import useFetch from "@/hooks/useFetch"
import { useParams } from "react-router-dom"

interface Question {
    id: number ;
    word: string;
    questions: string;
}

interface Data {
    id: number;
    name: string;
    questions: Question[]
}
const keyboard: string[] = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
]

function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch<Data>(`questions/${id}` )
if(loading) {
    return <Loading/>
}

return <div className="py-10">
    <div className="flex flex-col gap-6">
        {keyboard.map((str)=> {
            return <div className="flex items-center gap-4 " key={str}>
                {str.toUpperCase().split("").map((key)=> {
                    return <span className="text-xl font-bold ">{key}</span>
                })}
            </div>
        })}
    </div>
</div>
}

export default GameField