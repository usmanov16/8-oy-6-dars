import useFetch from "./hooks/useFetch"

interface Product {
  
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