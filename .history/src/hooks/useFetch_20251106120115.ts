import { BaseUrl } from "@/api/url"
import { useEffect, useState } from "react"


function useFetch() {
  
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
 
    const [loading, setLoading]= useState<boolean>(false)

    async function fetchData(){
        try{
            const response = await fetch(
                BaseUrl
            )
            if(!response.ok) {
                throw new Error
            }
        } catch(error: any) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=> {
        fetchData()
    })
}

export default useFetch
