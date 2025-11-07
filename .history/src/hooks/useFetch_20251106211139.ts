import { BaseUrl } from "@/api/url"
import { useEffect, useState } from "react"




function useFetch<T>(param: "documentation" | "questions" | "") {
  
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
 
    const [loading, setLoading]= useState<boolean>(false)

    async function fetchData(){
        try{
            const response = await fetch(
                BaseUrl
            )
            if(!response.ok) {
                throw new Error("Xatolik")
            }
            const data = await response.json()
            setData(data)

        } catch(error: any) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return {data, error, loading}
}

export default useFetch
