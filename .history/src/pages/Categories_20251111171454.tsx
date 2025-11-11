import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch"
import type { FetchType } from "@/model/model"
import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Data {
    id: number;
    name: string;
}

function Categories() {
    const navigate = useNavigate()
    const {data, loading} = useFetch<FetchType<Data>>("categories")

    if(loading) {
        return <Loading/>
    }

    const handleClick = (id: number) => {
        navigate("/game-field/" + id)
    }

    return (
        <div className="py-10 bg-gray-50 min-h-screen">
            <div className="container mx-auto">
                <div className="mb-10 flex items-center justify-between">
                    <Button 
                        onClick={()=> navigate("/")}
                        className="p-3 bg-white shadow-md hover:shadow-lg transition duration-200 rounded-lg"
                    >
                        <Undo2 />
                    </Button>
                    <h2 className="text-3xl font-bold text-gray-800">Pick a Category</h2>
                    <span></span>
                </div>

                <ul className="grid gap-6 grid-cols-[repeat(auto-fit, minmax(200px, 1fr))]">
                    {data?.data.map((category) => (
                        <li key={category.id}>
                            <Button
                                onClick={()=> handleClick(category.id)}
                                className="w-full text-white bg-blue-600 hover: shadow-md hover:shadow-lg rounded-xl py-5 text-lg font-semibold transition-all duration-200"
                            >
                                {category.name.toUpperCase()}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Categories;
