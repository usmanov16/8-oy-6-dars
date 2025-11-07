import useFetch from "@/hooks/useFetch"
import {FetchType} from ""

function Document() {
    const {data, error, loading} = useFetch("documentation")
  return (
    <div>Document</div>
  )
}

export default Document