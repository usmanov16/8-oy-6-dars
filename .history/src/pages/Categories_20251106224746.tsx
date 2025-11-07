import useFetch from "@/hooks/useFetch"


function Categories() {
    const {data} = useFetch()
  return (
    <div>Categories</div>
  )
}

export default Categories