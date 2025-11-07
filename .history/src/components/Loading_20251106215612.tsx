
import {PropagateLoader} from "react-spinners"
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background z-50 relative">
  <PropagateLoader color="white" />
</div>

  )
}

export default Loading