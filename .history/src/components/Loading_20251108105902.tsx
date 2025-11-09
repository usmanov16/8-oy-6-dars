import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[9999]">
      <PropagateLoader color="purple" size={15} />
    </div>
  );
}

export default Loading;
