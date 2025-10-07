export default function CalculatorView({ value, onButtonClick }) {
  const baseBtn = "py-3 rounded transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 active:scale-95";
  const darkBtn = baseBtn + " bg-black text-white hover:bg-gray-300 hover:text-black focus:ring-gray-400";
  const opBtn = baseBtn + " bg-yellow-300 text-black hover:bg-yellow-400 focus:ring-yellow-400";
  const funcBtn = baseBtn + " bg-gray-900 text-white hover:bg-gray-400 hover:text-black focus:ring-gray-400";
  const equalBtn = baseBtn + " bg-green-500 text-black hover:bg-green-600 focus:ring-green-500";
  const acBtn = baseBtn + " bg-red-400 text-white hover:bg-red-500 focus:ring-red-400";

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen min-w-screen lg:min-w-[400px] lg:p-10 bg-gray-100">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Calculator</h1>
      </div>
      <div className="mb-4 w-full max-w-xs">
        <input
          type="text"
          value={value}
          readOnly
          className="w-full p-3 text-right text-xl border rounded bg-white shadow text-black focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-4 gap-3 justify-items-stretch w-full max-w-xs">
        <button className={acBtn} onClick={() => onButtonClick('AC')}>AC</button>
        <button className={funcBtn} onClick={() => onButtonClick('+/-')}>+/-</button>
        <button className={funcBtn} onClick={() => onButtonClick('%')}>%</button>
        <button className={opBtn} onClick={() => onButtonClick('/')}>/</button>

        <button className={darkBtn} onClick={() => onButtonClick('1')}>1</button>
        <button className={darkBtn} onClick={() => onButtonClick('2')}>2</button>
        <button className={darkBtn} onClick={() => onButtonClick('3')}>3</button>
        <button className={opBtn} onClick={() => onButtonClick('*')}>*</button>

        <button className={darkBtn} onClick={() => onButtonClick('4')}>4</button>
        <button className={darkBtn} onClick={() => onButtonClick('5')}>5</button>
        <button className={darkBtn} onClick={() => onButtonClick('6')}>6</button>
        <button className={opBtn} onClick={() => onButtonClick('-')}>-</button>

        <button className={darkBtn} onClick={() => onButtonClick('7')}>7</button>
        <button className={darkBtn} onClick={() => onButtonClick('8')}>8</button>
        <button className={darkBtn} onClick={() => onButtonClick('9')}>9</button>
        <button className={opBtn} onClick={() => onButtonClick('+')}>+</button>

        <button className={darkBtn + " col-span-2"} onClick={() => onButtonClick('0')}>0</button>
        <button className={darkBtn} onClick={() => onButtonClick('.')}>.</button>
        <button className={equalBtn} onClick={() => onButtonClick('=')}>=</button>
      </div>
    </div>
  );
}
