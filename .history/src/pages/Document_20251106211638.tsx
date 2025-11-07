import useFetch from "@/hooks/useFetch"

interface FetchType<T> {
    limit: number;
    total: number;
    skip: number;
    data: T[]
}
function Document() {
    const {data, error, loading} = useFetch("documentation")
  return (
    <div>Document</div>
  )
}

export default Document