import useFetch from "@/hooks/useFetch"
import { type FetchType } from "@/model/model"
import Loading from "@/components/Loading"

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
      <div className="container className="grid grid-cols-1 gap-6">
        {data &&
          data.data.map((obj) => (
            <div  key={obj.id}>
              <h2>{obj.title}</h2>
              <p>{obj.text}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Document
