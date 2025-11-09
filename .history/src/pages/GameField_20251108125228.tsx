import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import Keyboard from "@/components/Keyboard";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Answer from "@/components/Answer";

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


function GameField() {
  const [letters, setLetters] = useState<string>("")
  const { id } = useParams();

  useEffect(()=> {
    let timeout: number
    if(
      data?.questions[activeQuestion].answer.toUpperCase().split("").every((l) => letters.includes(l) || l === " ")
    ) {
      timeout = setTimeout(()=> {
        setLetters("")
      setActiveQuestion((prev) => prev + 1)

      }, 2000)
      toast.success("To'g'ri topdingiz")

    }
    return ()=> clearTimeout(timeout)
  }, [letters])
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

     {data && <Answer letters={} activeQuestion={activeQuestion} data={data}/>}
      <Keyboard setLetters={setLetters} letters={letters}/>
      
      
    </div>
  );
}

export default GameField;
