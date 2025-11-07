import useFetch from "@/hooks/useFetch"


function Categories() {
    const {data} = useFetch("categories")
    
  return (
    <div>Categories</div>
  )
}

export default Categories