import useFetch from "./hooks/useFetch"



function App() {
  const data = useFetch()
  
  return (
    <div>App</div>
  )
}

export default App