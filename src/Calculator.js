import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const click = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Invalid");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="w-auto h-screen mt-0 bg-white-300 md:bg-yellow-100">
      <div className="w-auto h-screen mt-0">
        <p className="text-center text-4xl text-orange-200 md:text-violet-700 font-Times new roman">
          <b>Calculator</b>
        </p>
        <div className="m-auto mb-3 w-45 mt-32 grid h-auto  sm:w-2/3 3xl bg-grey-500 sm:h-auto md:w-2/3 lg:w-1/2 sm:bg-grey-500 ">
          <input
            id="I2"
            type="text"
            placeholder="0"
            className="m-auto sm:h-16 mt-3 w-2/3 border shadow-md rounded-lg bg-pink-100 h-11 pl-2 pd-2 text-gray-600  hover:shadow-red-400 text-3xl font-extrabold"
            value={input}
            readOnly
          />
          <div className="m-auto">
            {["7", "8", "9", "+"].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl mt-2 mr-2 sm:w-20 rounded-xl border bg-green-200 font-semibold text-violet-900 shadow-lg"
                onClick={() => click(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="m-auto">
            {["4", "5", "6", "-"].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl mt-2 mr-2 sm:w-20 rounded-xl border bg-green-200 font-semibold text-violet-900 shadow-lg"
                onClick={() => click(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="m-auto">
            {["1", "2", "3", "*"].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl mt-2 mr-2 sm:w-20 rounded-xl border bg-green-200 font-semibold text-violet-900 shadow-lg"
                onClick={() => click(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="m-auto mb-4">
            {["C", "0", "=", "/"].map((value) => (
              <button
                key={value}
                className="w-10 h-10 sm:h-16 text-3xl mt-2 mr-2 sm:w-20 rounded-xl border bg-green-30w0 font-semibold text-blue-900 shadow-lg"
                onClick={() => click(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
