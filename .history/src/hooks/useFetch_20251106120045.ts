import { useEffect, useState } from "react"


function useFetch() {
  
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
 
    const [loading, setLoading]= useState<boolean>(false)

    async function fetchData(){
        try{
            const response = await fetch(
                Ba
            )
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
