import { useState } from "react"


function useFetch() {
  
    const [data, setData] = useState< | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading]= useState<boolean>(false)
}

export default useFetch
