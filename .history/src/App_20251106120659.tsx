import useFetch from "./hooks/useFetch"

interface Product {
  
}

function App() {
  const data = useFetch()
  
  return (
    <div>App</div>
  )
}

export default App