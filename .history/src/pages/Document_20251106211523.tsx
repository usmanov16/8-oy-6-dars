import useFetch from "@/hooks/useFetch"

interface FetchType {
    limit
}
function Document() {
    const {data, error, loading} = useFetch("documentation")
  return (
    <div>Document</div>
  )
}

export default Document