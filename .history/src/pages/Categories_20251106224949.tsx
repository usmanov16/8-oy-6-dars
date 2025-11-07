import useFetch from "@/hooks/useFetch"
import type { FetchType } from "@/model/model"

interface Data {
    id: number;
    name: string;
}

function Categories() {
    const {data, loading} = useFetch<FetchType<Data>>("categories")

    if(loading) {
        return <Loa
    }
  return (
    <div>Categories</div>
  )
}

export default Categories