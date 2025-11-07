import { useState } from "react"


function useFetch() {
  
    const [data, setData] = useState(null)
    const [error, setError] = useState<string(null)
    const [loading, setLoading]= useState<boolean>(false)
}

export default useFetch
