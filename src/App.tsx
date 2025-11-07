import Router  from "./routes/Router";
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
  
  
  return <Router />
}

export default App