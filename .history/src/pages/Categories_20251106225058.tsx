import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch"
import type { FetchType } from "@/model/model"

interface Data {
    id: number;
    name: string;
}

function Categories() {
    const {data, loading} = useFetch<FetchType<Data>>("categories")

    if(loading) {
        return <Loading/>
    }
  return (
    <div>
        <div className="container">
        <div className="container mb-10 flex items-center justify-between">
        <Button onClick={()=> navigate("/")}>
          <Undo2 />
        </Button>
        <h2 className="text-3xl font-bold   ">How to play</h2>
        <span></span>
      </div>
        </div>
    </div>
  )
}

export default Categories