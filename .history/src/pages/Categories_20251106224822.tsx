import useFetch from "@/hooks/useFetch"


function Categories() {
    const {data} = useFetch<Fetch>("categories")

  return (
    <div>Categories</div>
  )
}

export default Categories