<<<<<<< HEAD
import { useState } from "react";
import "./index.css";
import Message from "./Message";

function App() {
  const [count, setCount] = useState(2);
=======
import { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
>>>>>>> template/main

  return (
    <div className="App">
      <h1>React カウンター</h1>
      <p>カウント: {count}</p>
<<<<<<< HEAD
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>増やす！</button>
        <button onClick={() => setCount(count - 1)}>減らす</button>
      </div>
      {count === 5 && <p>5 回クリックしたよ！</p>}
      <Message
        count={count}
        hoge="メッセージ"
        text="これは子コンポーネントです"
      />
=======
      <button onClick={() => setCount(count + 1)}>
        カウントアップ
      </button>
>>>>>>> template/main
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> template/main
