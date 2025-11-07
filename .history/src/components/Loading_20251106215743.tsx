
import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500">
  <PropagateLoader color="white" />
  <p className="text-white ml-4">Loading...</p>
</div>


  )
}

export default Loading