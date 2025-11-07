import { useParams } from "react-router-dom"


function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch("questio")
  return (
    <div>GameField</div>
  )
}

export default GameField