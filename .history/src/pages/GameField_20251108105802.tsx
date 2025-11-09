import Loading from "@/components/Loading";
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


function GameField() {
  const { id } = useParams();
  if (!id) return <Loading />;

  const { data, loading } = useFetch<Data>(`questions/${id}`);
  const [activeQuestion, setActiveQuestion] = useState(0);

  if (loading) return <Loading />;
  if (!data || !data.questions?.length)
    return (
      <p className="text-center text-gray-500">
        Фильм не найден или вопросы отсутствуют.
      </p>
    );

  const currentQuestion = data.questions[activeQuestion];

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-10">
        
        {currentQuestion?.questions || data.name}
      </h2>

      
      <div className="mb-15 flex flex-wrap gap-x-5 gap-y-10 items-center justify-center">
        {currentQuestion?.word
          ?.toUpperCase()
          ?.split(" ")
          .map((word, i) => (
            <div className="flex gap-2" key={i}>
              {word.split("").map((_, j) => (
                <span
                  className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded"
                  key={`${i}-${j}`}
                >
                  
                </span>
              ))}
            </div>
          ))}
      </div>
      <
      
      
    </div>
  );
}

export default GameField;
