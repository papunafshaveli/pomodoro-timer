import { useRef, useState } from "react";
import {
  AppContainer,
  Buttons,
  SelectContainer,
  Time,
  TimeTitle,
  Title,
} from "./styles";

function Timer() {
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

  const numbers = Array.from(Array(15).keys()).map((num) => num + 1);

  return (
    <AppContainer>
      <SelectContainer>
        <TimeTitle>Choose the Time!</TimeTitle>
        <select
          name=""
          id=""
          value={timeLeft / 60}
          onChange={(e) => setTimeLeft(+e.target.value * 60)}
        >
          {numbers.map((num) => (
            <option key={num} value={num}>
              {num} minute{num !== 1 && "s"}
            </option>
          ))}
        </select>
      </SelectContainer>
      {!timerRunning && <Title>{title}</Title>}
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

export default Timer;
