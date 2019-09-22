import React, { FC, useState } from 'react'

interface IProps {
    runIterator: () => void;
    initialRun: () => void;
    resetBoard: () => void;
}

const Controller:FC<IProps> = (props: IProps) => {
    const [updateInterval, setUpdateInterval] = useState<string>('1000')
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [intervalId, setIntervalId] = useState<number>(0)
    const stopGame = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setIsRunning(false)
        props.resetBoard()
    }    

    const handleUpdateInterval = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setUpdateInterval(e.target.value)
    }

    const handleRun = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault() 
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
        <div>
            <form>
            Update every <input type='number' name='updateInterval' 
            value={updateInterval} onChange={handleUpdateInterval}/>
            <button onClick={handleRun}>{isRunning ? 'Stop' : 'Run'}</button>
            <button onClick={stopGame}>Stop</button>
            </form>
        </div>
    )
}

export default Controller
