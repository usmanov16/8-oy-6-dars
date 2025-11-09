
import useFetch from "@/hooks/useFetch";
import Keyboard from "@/components/Keyboard";

import { useEffect, useState } from "react";


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

  const { data, loading } = useFetch<Data>(`questions/${id}`);
  const [activeQuestion, setActiveQuestion] = useState(0);

  
  

  const currentQuestion = data.questions[activeQuestion];

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold text-center mb-10">
        
        {currentQuestion?.questions || data.name}
      </h2>

      
      
      <Keyboard setLetters={setLetters} letters={letters}/>
      
      
    </div>
  );
}

export default GameField;
