import Loading from "@/components/Loading"
import useFetch from "@/hooks/useFetch"
import { useParams } from "react-router-dom"

interface Data {
    id: num
}

function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch(`questions/${id}` )
if(loading) {
    return <Loading/>
}

  return (
    <div></div>
  )
}

export default GameField