import React, { FC, useState } from 'react';
import * as Sc from './Controller.style';

interface IProps {
    runIterator: () => void;
    initialRun: () => void;
    resetBoard: () => void;
}

const Controller:FC<IProps> = (props: IProps) => {
    const [updateInterval, setUpdateInterval] = useState<string>('1000')
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [intervalId, setIntervalId] = useState<number>(0)
    const [firstRun, setFirstRun] = useState<boolean>(true)

    const RestartGame = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setIsRunning(false)
        setFirstRun(true)
        clearInterval(intervalId)
        props.resetBoard()
    }    

    const handleUpdateInterval = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setUpdateInterval(e.target.value)
    }

    const handleRun = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault() 
        if(firstRun) { props.initialRun() }
        setFirstRun(false)
        let runGame:number;
        const flag = !isRunning;
        setIsRunning(!isRunning)
        if(flag) {
            runGame = setInterval(props.runIterator, updateInterval)
            setIntervalId(runGame)
        } 
        else {
            clearInterval(intervalId)
        }         
      
    }

    return (
        <Sc.Controller>
            <form>
            Update every <Sc.Input min='300' type='number' name='updateInterval' 
            value={updateInterval} onChange={handleUpdateInterval}/>
            <Sc.Button onClick={handleRun}>{isRunning ? 'Stop' : 'Run'}</Sc.Button>
            <Sc.Button onClick={RestartGame}>Restart</Sc.Button>
            </form>
        </Sc.Controller>
    )
}

export default Controller
