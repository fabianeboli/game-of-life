import React, { FC, useState } from "react";
import * as Sc from "./Controller.style";

interface IProps {
  runIterator: () => void;
  initialRun: () => void;
  resetBoard: () => void;
}

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Controller: FC<IProps> = (props: IProps) => {
  const [updateInterval, setUpdateInterval] = useState<string>("250");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [firstRun, setFirstRun] = useState<boolean>(true);

  const RestartGame = (e: ClickEvent) => {
    e.preventDefault();
    setIsRunning(false);
    setFirstRun(true);
    clearInterval(intervalId);
    props.resetBoard();
  };

  const handleUpdateInterval = (e: ChangeEvent) => {
    return setUpdateInterval(e.target.value);
  };

  const handleRun = (e: ClickEvent) => {
    e.preventDefault();
    if (firstRun) {
      props.initialRun();
    }
    setFirstRun(false);
    let runGame: number;
    const flag = !isRunning;
    setIsRunning(!isRunning);
    if (flag) {
      runGame = setInterval(props.runIterator, updateInterval);
      setIntervalId(runGame);
    } else {
      clearInterval(intervalId);
    }
  };

  return (
    <Sc.Controller>
      <Sc.Form>
        <Sc.P>
          Update every{" "}
          <Sc.Input
            min="150"
            type="number"
            name="updateInterval"
            value={updateInterval}
            onChange={handleUpdateInterval}
          />{" "}
          ms
        </Sc.P>
        <Sc.Button onClick={handleRun}>{isRunning ? "Stop" : "Run"}</Sc.Button>
        <Sc.Button onClick={RestartGame}>Restart</Sc.Button>
      </Sc.Form>
    </Sc.Controller>
  );
};

export default Controller;
