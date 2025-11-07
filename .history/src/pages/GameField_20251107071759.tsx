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
  
    
    if (!id) {
      return <Loading />;
    }
  
    const { data, loading } = useFetch<Data>(`questions/${id}`);
    const [activeQuestion, setActiveQuestion] = useState(0);
  
    if (loading) {
      return <Loading />;
    }
  
    return (
      <div className="py-10">
        <h2 className="text-2xl font-bold text-center mb-10">
          {data && data.questions[0].question}
        </h2>
  
        <div className="mb-15 flex-wrap flex gap-x-5 gap-y-10 items-center justify-center">
          {data &&
            data.questions[activeQuestion].word
              .toUpperCase()
              .split(" ")
              .map((word, i) => {
                return (
                    <div className="flex " key={i}>{word.split("").map(letter, i) => {
                        return <span className=" w-10 h-10 border border-gray-400 " key={i}>
                            {false && letter}
                        </span>
                    }}
                        
                    }}</div>
                )
              }
              ))}
        </div>
  
        <div className="flex flex-col gap-6 items-center">
          {keyboard.map((str) => (
            <div className="flex items-center gap-4" key={str}>
              {str.toUpperCase().split("").map((key) => (
                <Button key={key} className="text-xl font-bold">
                  {key}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default GameField;
