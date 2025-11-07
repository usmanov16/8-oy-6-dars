import { useEffect, useState } from "react"


function useFetch() {
  
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
 
    const [loading, setLoading]= useState<boolean>(false)

    useEffect(())
}

export default useFetch
