import { useParams } from "react-router-dom"


function GameField() {

    const {id} = useParams()
    const {data, loading} = useFetch("questions")
if(loading) {
    
}

  return (
    <div></div>
  )
}

export default GameField