import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const onCountPlus = () => {
    setCount((count) => count + 1);
  };

  const onCountMinus = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onCountMinus} className="minus">
          - Минус
        </button>
        <button onClick={onCountPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
