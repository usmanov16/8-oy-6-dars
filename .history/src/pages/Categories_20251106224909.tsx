import useFetch from "@/hooks/useFetch"
import type { FetchType } from "@/model/model"

interface Data {
    id: number;
    name: string;
}

function Categories() {
    const {data} = useFetch<FetchType<>("categories")

  return (
    <div>Categories</div>
  )
}

export default Categories