import useFetch from "@/hooks/useFetch"


function Document() {
    const {data, error, loading} = useFetch("dcumentation")
  return (
    <div>Document</div>
  )
}

export default Document