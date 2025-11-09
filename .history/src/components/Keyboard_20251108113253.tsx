import { Button } from "./ui/button";
import React from "react";
const keyboard: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
type Props = {
    setLetters: <React.Dispatch<React.setStateActions<>>
}

function Keyboard({setLetters}: Props}) {


  return (
    <div className="flex flex-col gap-6 items-center mt-10">
        {keyboard.map((row) => (
          <div className="flex items-center gap-4" key={row}>
            {row.toUpperCase().split("").map((key) => (
              <Button key={key} className="text-xl font-bold">
                {key}
              </Button>
            ))}
          </div>
        ))}
      </div>
  )
}

export default Keyboard