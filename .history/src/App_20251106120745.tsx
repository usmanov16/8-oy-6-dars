import useFetch from "./hooks/useFetch"

interface Product {
  author:string;
  body:string;
  categories: string;
  id: number;
  likes: number;
  title: string;
  userId: number;
}

function App() {
  const data = useFetch()
  
  return (
    <div>App</div>
  )
}

export default App