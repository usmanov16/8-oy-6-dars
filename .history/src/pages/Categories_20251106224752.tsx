import useFetch from "@/hooks/useFetch"


function Categories() {
    const {data} = useFetch("cate")
  return (
    <div>Categories</div>
  )
}

export default Categories