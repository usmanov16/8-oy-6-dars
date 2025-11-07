
import {PropagateLoader} from "react-spinners"
function Loading() {
  return (
    <div>
        <PropagateLoader color={document.body.classList.contains("dark")/>
    </div>
  )
}

export default Loading