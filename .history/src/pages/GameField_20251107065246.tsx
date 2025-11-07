import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Question {
  id: number;
  word: string;
  questions: string;
}

interface Data {
  id: number;
  name: string;
  questions: Question[];
}
const keyboard: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

function GameField() {
  const { id } = useParams();
  const { data, loading } = useFetch<Data>(`questions/${id}`);
  if (loading) {
    return <Loading />;
  }
  const [activeQuestion, setActiveQuestion] = useState(0);



  return (
    <div className="py-10">
        <h2 className="text-2xl font-bold text-center mb-10">{data && data.questions[0].question}</h2>

        <div className="mb-15 flex items-center justify-center">
            {data && data.questions[activeQuestion].word.split("").map((letter, i)=> {
                return <span className="border border-gray-400 py-" key={i}></span>
            })}
        </div>

      <div className="flex flex-col gap-6 items-center">
        {keyboard.map((str) => {
          return (
            <div className="flex items-center gap-4 " key={str}>
              {str
                .toUpperCase()
                .split("")
                .map((key) => {
                  return <Button key={key} className="text-xl font-bold ">{key}</Button>;
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameField;
