import { useState } from "react"


function useFetch() {
  
    const [data, setData] = useState<T | null></T>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading]= useState<boolean>(false)
}

export default useFetch
