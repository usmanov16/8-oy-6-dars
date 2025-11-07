import useFetch from "./hooks/useFetch"

interface Product {
  author:string;
  body:string;
  categories: string;
  
}

function App() {
  const data = useFetch()
  
  return (
    <div>App</div>
  )
}

export default App