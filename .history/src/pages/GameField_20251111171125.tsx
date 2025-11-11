import Loading from "@/components/Loading";
import useFetch from "@/hooks/useFetch";
import Keyboard from "@/components/Keyboard";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const navigate = useNavigate();
  const { data, loading } = useFetch<Data>(`questions/${id}`);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [letters, setLetters] = useState<string>("");
  const [lives, setLives] = useState<number>(3);
  const [showModal, setShowModal] = useState(false);

  // Проверяем правильность ответа
  useEffect(() => {
    if (!data || !data.questions?.[activeQuestion]) return;

    const currentAnswer = data.questions[activeQuestion].answer
      .toUpperCase()
      .split("");

    if (currentAnswer.every((l) => letters.includes(l) || l === " ")) {
      toast.success("To‘g‘ri topdingiz!");
      const timeout = setTimeout(() => {
        setLetters("");
        setActiveQuestion((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [letters, data, activeQuestion]);

  // Проверяем, правильная ли буква при каждом изменении
  useEffect(() => {
    if (!data || !data.questions?.[activeQuestion]) return;

    const lastLetter = letters[letters.length - 1];
    const currentAnswer = data.questions[activeQuestion].answer.toUpperCase();

    if (lastLetter && !currentAnswer.includes(lastLetter)) {
      toast.error("Неправильная буква!");
      setLives((prev) => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setShowModal(true);
        }
        return newLives;
      });
    }
  }, [letters]);

  const handleRestart = () => {
    setShowModal(false);
    setLives(3);
    setLetters("");
    setActiveQuestion(0);
  };

  const handleExit = () => {
    navigate("/categories");
  };

  if (loading) return <Loading />;
  if (!data || !data.questions?.length)
    return (
      <p className="text-center text-gray-500">
        Фильм не найден или вопросы отсутствуют.
      </p>
    );

  if (activeQuestion >= data.questions.length)
    return (
      <p className="text-center text-green-600 font-bold text-2xl py-20">
        🎉 Все вопросы завершены!
      </p>
    );

  const currentQuestion = data.questions[activeQuestion];

  return (
    <div className="py-10 relative">
      {/* ❤️ Сердечки */}
      <div className="flex justify-center mb-6 gap-2">
        {[...Array(3)].map((_, i) => (
          <Heart
            key={i}
            size={28}
            className={i < lives ? "text-red-500 fill-red-500" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Модалка "Игра окончена" */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-80">
            <h2 className="text-2xl font-bold text-red-600 mb-4">End </h2>
            <p className="text-gray-600 mb-6">You have lost all your lives</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={handleRestart}>
                Play again
              </Button>
              <Button onClick={handleExit}>Вернуться</Button>
            </div>
          </div>
        </div>
      )}

      
      <h2 className="text-2xl font-bold text-center mb-10">
        {currentQuestion?.questions || data.name}
      </h2>

      
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

      
      <Keyboard setLetters={setLetters} letters={letters} />
    </div>
  );
}

export default GameField;
