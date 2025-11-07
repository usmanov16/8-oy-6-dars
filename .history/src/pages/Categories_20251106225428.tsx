import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch"
import type { FetchType } from "@/model/model"
import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Data {
    id: number;
    name: string;
}

function Categories() {
    const navigate = useNavigate()
    const {data, loading} = useFetch<FetchType<Data>>("categories")

    if(loading) {
        return <Loading/>
    }
  return (
    <div className="py-10">
        <div className="container">
        <div className="container mb-10 flex items-center justify-between">
        <Button onClick={()=> navigate("/")}>
          <Undo2 />
        </Button>
        <h2 className="text-3xl font-bold   ">Pick a Category</h2>
        <span></span>
      </div>

        </div>
        <ul>
            {data &&  data.data.map((category) => {
                return <li key={category.id}>
                    <Button size={x}></Button>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Categories