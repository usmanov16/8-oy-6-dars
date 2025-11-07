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
  if (!id) return <Loading />;

  const { data, loading } = useFetch<Data>(`questions/${id}`);
  const [activeQuestion, setActiveQuestion] = useState(0);

  if (loading) return <Loading />;
  if (!data || !data.questions?.length)
    return <p className="text-center text-gray-500">No questions found.</p>;

  const currentQuestion = data.questions[activeQuestion];

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-10">
        {currentQuestion?.questions || "No question text"}
      </h2>

      {/* Слоты под буквы */}
      <div className="mb-15 flex flex-wrap gap-x-5 gap-y-10 items-center justify-center">
        {currentQuestion?.word
          ?.toUpperCase()
          ?.split(" ")
          .map((word, i) => (
            <div className="flex gap-2" key={i}>
              {word.split("").map((letter, j) => (
                <span
                  className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded"
                  key={`${i}-${j}`}
                >
                  {false && letter}
                </span>
              ))}
            </div>
          ))}
      </div>

      {/* Клавиатура */}
      <div className="flex flex-col gap-6 items-center mt-10">
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
