
import {PropagateLoader} from "react-spinners"
function Loading() {
  return (
    <div className="minhscreen">
        <PropagateLoader color={document.body.classList.contains("dark") ? "white" : "black"}/>
    </div>
  )
}

export default Loading