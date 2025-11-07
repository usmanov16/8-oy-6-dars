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

function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch<Data>(`questions/${id}` )
if(loading) {
    return <Loading/>
}

}

export default GameField