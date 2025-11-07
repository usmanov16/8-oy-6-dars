import useFetch from "@/hooks/useFetch"
import {type FetchType } from "@/model/model"
import Loading from "@/components/Loading";

interface Data {
    id: number;
    title: string; 
    text: string;

}
function Document() {
    const {data, error, loading} = useFetch<FetchType<Data>>("documentation")
    if(loading) {
        return <Loading/>
    }

    if(error) {
        return 
    }
  return (
    <div>Document</div>
  )
}

export default Document