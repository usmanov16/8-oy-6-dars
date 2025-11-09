import { Button } from "./ui/button";
import React from "react";
const keyboard: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
type Props = {
    setLetters: React.Dispatch<React.SetStateAction<string>>
    letters: string
}

function Keyboard({setLetters, letters}: Props) {
    const handleClick = (key: string) => {
        setLetters((prev) => prev += key)
    }

  return (
    <div className="flex flex-col gap-6 items-center mt-10">
        {keyboard.map((row) => (
          <div className="flex items-center gap-4" key={row}>
            {row.toUpperCase().split("").map((key) => (
              <Button disabled={letters.includes} onClick={()=> handleClick(key)} key={key} className="text-xl font-bold">
                {key}
              </Button>
            ))}
          </div>
        ))}
      </div>
  )
}

export default Keyboard