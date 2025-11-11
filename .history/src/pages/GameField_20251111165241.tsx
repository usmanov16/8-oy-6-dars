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
  const { id } = useParams();
  const { data, loading } = useFetch<Data>(`questions/${id}`);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [letters, setLetters] = useState<string>("");

  useEffect(() => {
    if (!data || !data.questions?.[activeQuestion]) return;

    const currentAnswer = data.questions[activeQuestion].answer
      .toUpperCase()
      .split("");

    // Проверяем, все ли буквы угаданы
    if (currentAnswer.every((l) => letters.includes(l) || l === " ")) {
      toast.success("To'g'ri topdingiz!");

      const timeout = setTimeout(() => {
        setLetters("");
        setActiveQuestion((prev) => prev + 1);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [letters, data, activeQuestion]);

  if (!id) return <Loading />;
  if (loading) return <Loading />;

  if (!data || !data.questions?.length) {
    return (
      <p className="text-center text-gray-500">
        Фильм не найден или вопросы отсутствуют.
      </p>
    );
  }

  if (activeQuestion >= data.questions.length) {
    return (
      <div className="text-center py-20 text-green-600 font-bold text-2xl">
        🎉 Все вопросы завершены!
      </div>
    );
  }

  const currentQuestion = data.questions[activeQuestion];

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-10">
        {currentQuestion?.questions || data.name}
      </h2>

      {/* Блок с ответом */}
      <div className="mb-15 flex flex-wrap gap-x-5 gap-y-10 items-center justify-center">
        {currentQuestion?.answer
          ?.toUpperCase()
          ?.split(" ")
          .map((word, i) => (
            <div className="flex gap-2" key={i}>
              {word.split("").map((letter, j) => (
                <span
                  key={`${i}-${j}`}
                  className="w-10 h-10 flex text-xl font-bold items-center justify-center border border-gray-400 rounded"
                >
                  {letters.includes(letter) ? letter : ""}
                </span>
              ))}
            </div>
          ))}
      </div>

      {/* Клавиатура */}
      <Keyboard setLetters={setLetters} letters={letters} />
    </div>
  );
}

export default GameField;
