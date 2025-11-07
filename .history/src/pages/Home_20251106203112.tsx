import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

function Home() {
return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
        <div className="w-full max-w-[400px] rounded-lg px-6 py-4 border border-accent bg-accent flex flex-col gap-10">
            <Button size={xlg}>
            <Play />
            </Button>
        </div>
    </div>
)
}

export default Home