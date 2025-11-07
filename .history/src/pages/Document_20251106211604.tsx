import useFetch from "@/hooks/useFetch"

interface FetchType {
    limit: number;
    total: number;
    skip: number;
    data: {id: number; title: string; text: string}
}
function Document() {
    const {data, error, loading} = useFetch("documentation")
  return (
    <div>Document</div>
  )
}

export default Document