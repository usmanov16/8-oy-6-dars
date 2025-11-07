import useFetch from "@/hooks/useFetch"
import { type FetchType } from "@/model/model"
import Loading from "@/components/Loading"
import { Button } from "@/components/ui/button"
import { Undo2 } from "lucide-react"

interface Data {
  id: number
  title: string
  text: string
}

function Document() {
  
  const { data, loading } = useFetch<FetchType<Data>>("documentation")

  
  console.log("loading:", loading)

  if (loading) {
    return <Loading />
  }

  return (
    <div className="py-10">
        <div className="container mb-10">
            <Button >
            <Undo2 />
            </Button>
            <h2></h2>
        </div>
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data &&
          data.data.map((obj) => (
            <div className="border border-gray-400 rounded-sm px-4 py-8"  key={obj.id}>
              <h2 className="text-xl font-bold mb-4 ">{obj.title}</h2>
              <p>{obj.text}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Document
