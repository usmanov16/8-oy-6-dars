import { Router } from "./";
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
  const {data} = useFetch<Product>()
  
  return <Router />
}

export default App