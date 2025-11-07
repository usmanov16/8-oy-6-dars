import { useParams } from "react-router-dom"


function GameField() {

    const {id} = useParams()
    
  return (
    <div>GameField</div>
  )
}

export default GameField