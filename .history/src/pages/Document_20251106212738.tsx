import useFetch from "@/hooks/useFetch"
import { FetchType } from "@/model/model"


interface Data {
    id: number;
    title: string; 
    text: string;

}
function Document() {
    const {data, error, loading} = useFetch<FetchType>("documentation")
  return (
    <div>Document</div>
  )
}

export default Document