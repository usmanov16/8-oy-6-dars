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
    const {data, loading} = useFetch<Da>(`questions/${id}` )
if(loading) {
    return <Loading/>
}

  return (
    <div></div>
  )
}

export default GameField