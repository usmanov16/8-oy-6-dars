import { Button } from "./ui/button";


function Keyboard() {

    const keyboard: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

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