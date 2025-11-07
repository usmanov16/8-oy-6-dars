import useFetch from "@/hooks/useFetch"
import {type FetchType } from "@/model/model"
import Loading from "@/components/Loading";

interface Data {
    id: number;
    title: string; 
    text: string;

}
function Document() {
    const {data, loading} = useFetch<FetchType<Data>>("documentation")
    if(loading) {
        return <Loading/>
    }
  return <div className="py-10">
    {data && data.data.map((obj) => {
        return <div className="grid grid-cols-1 gap-6" key={obj.id}>
            <h2>{obj.title}</h2>
            <p>{</p>
        </div>
    })}
  </div>
}

export default Document