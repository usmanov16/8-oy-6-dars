import useFetch from "./hooks/useFetch"

interface Product {
  [key: string]: string | number | boolean
  body:string;
  categories: string;
  id: number;
  date: string;
  title: string;
  
}

function App() {
  const data = useFetch()
  
  return (
    <div>App</div>
  )
}

export default App