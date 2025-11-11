import Router  from "./routes/Router";


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