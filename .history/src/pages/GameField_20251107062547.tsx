import { useParams } from "react-router-dom"


function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch("questions")

    
  return (
    <div></div>
  )
}

export default GameField