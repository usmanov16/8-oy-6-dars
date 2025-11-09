import toast from "react-hot-toast";
import Loading from "./Loading";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";


interface Question {
    id: number;
    answer: string;
    questions: string;
  }
  
  interface Data {
    id: number;
    name: string; 
    questions: Question[];
  }
  
  interface Props {
    activeQuestion: number;
    data
  }

function Answer({activeQuestion, data}) {
    const currentQuestion = data.questions[activeQuestion];
    const [letters, setLetters] = useState<string>("")
    
  
    
  
    const { data, loading } = useFetch<Data>(`questions/${id}`);
    const [activeQuestion, setActiveQuestion] = useState(0);
  return (
    <div className="mb-15 flex flex-wrap gap-x-5 gap-y-10 items-center justify-center">
        {currentQuestion?.answer
          ?.toUpperCase()
          ?.split(" ")
          .map((word, i) => (
            <div className="flex gap-2" key={i}>
              {word.split("").map((_, j) => (
                <span
                  className="w-10 h-10 flex text-xl font-bold items-center justify-center border border-gray-400 rounded"
                  key={`${i}-${j}`}
                >
                  {letters.includes(letter) && letter}
                  
                </span>
              ))}
            </div>
          ))}
      </div>
  )
}

export default Answer