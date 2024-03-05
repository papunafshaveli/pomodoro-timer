import styled from "styled-components";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const defaultTime = 5 * 60;
  const [timeLeft, setTimeLeft] = useState<number>(defaultTime);
  const [title, setTitle] = useState("Let's Begin!!!");
  const [timerRunning, setTimerRunning] = useState(false);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, "0");

  const timeLeftRef = useRef<number | undefined>();

  const startTimer = () => {
    if (!timerRunning) {
      setTitle("Keep Going!!!");
      setTimerRunning(true);
      timeLeftRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev >= 1) {
            return prev - 1;
          }
          clearInterval(timeLeftRef.current);
          handleReset();
          return 0;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timeLeftRef.current);
    setTitle("Keep It up!");
    setTimerRunning(false);
  };

  const handleReset = () => {
    clearInterval(timeLeftRef.current);
    setTitle("Ready to go another round?");
    setTimeLeft(defaultTime);
    setTimerRunning(false);
  };

  const isDisabledReset = timeLeft === defaultTime;
  const isDisabledStop = !timerRunning || timeLeft === 0;

  const numbers = Array.from(Array(16).keys());

  return (
    <AppContainer>
      <div>
        <select
          name=""
          id=""
          onChange={(e) => setTimeLeft(+e.target.value * 60)}
        >
          {numbers.map((num) => (
            <option key={num} value={num}>
              {num} minute{num !== 1 && "s"}
            </option>
          ))}
        </select>
      </div>
      <Text>{title}</Text>
      <Time>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </Time>
      <Buttons>
        <button onClick={startTimer} disabled={timerRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={isDisabledStop}>
          Stop
        </button>
        <button onClick={handleReset} disabled={isDisabledReset}>
          Reset
        </button>
      </Buttons>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  padding: 50px 0;

  margin-top: 100px;
`;

const Text = styled.h1`
  text-align: center;
`;

const Time = styled.div`
  display: flex;
  gap: 2px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  button {
    width: 100px;
    padding: 10px;

    border: none;
    border-radius: 8px;
  }
`;
