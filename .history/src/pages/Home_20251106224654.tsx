import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] rounded-lg px-6 py-4 border border-accent bg-accent flex flex-col gap-10">
        <Button onClick={()=> navigate("/categories")} size={"xlg"}>
          <Play />
        </Button>

        <Link
          to="/instruction"
          className="text-white self-center hover:text-primary hover:underline"
        >
          How to play
        </Link>
      </div>
    </div>
  )
}

export default Home
