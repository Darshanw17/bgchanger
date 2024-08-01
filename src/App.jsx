import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-3">
          <div className=" flex flex-wrap justify-center items-center gap 3 bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("purple")}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full "
            >
              Purple
            </button>
            <button
              onClick={() => setColor("red")}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="bg-green-500 hover:bg-green-600 text-white font
              py-2 px-4 rounded-full"
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
