import useFetch from "@/hooks/useFetch"


function Document() {
    const {data, error, loading} = useFetch()
  return (
    <div>Document</div>
  )
}

export default Document