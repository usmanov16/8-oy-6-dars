import useFetch from "@/hooks/useFetch";
import { type FetchType } from "@/model/model";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Data {
  id: number;
  title: string;
  text: string;
}

function Document() {
  const { data, loading } = useFetch<FetchType<Data>>("documentation");
  const navigate = useNavigate()

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-10">
      <div className="container mb-10 flex items-center justify-between">
        <Button onClick={()=> navigate}>
          <Undo2 />
        </Button>
        <h2 className="text-3xl font-bold   ">How to play</h2>
        <span></span>
      </div>
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data &&
          data.data.map((obj) => (
            <div className="border bg-white rounded-3xl px-6 py-8" key={obj.id}>
              <h2 className="text-xl items-center font-bold mb-4 text-[#261676]">
                {obj.title}
              </h2>
              <p className="text-gray-400">{obj.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Document;
