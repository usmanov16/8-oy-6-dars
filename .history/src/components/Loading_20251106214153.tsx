
import {PropagateLoader} from "react-spinners"
function Loading() {
  return (
    <div>
        <PropagateLoader color={document.body.classList.contains("dark") ? "white" : "black"/>
    </div>
  )
}

export default Loading