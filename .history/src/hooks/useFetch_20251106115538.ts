import { useState } from "react"


function useFetch() {
  
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading]= useState<boolean></boolean>(false)
}

export default useFetch
