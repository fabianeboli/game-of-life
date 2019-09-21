import React, { FC } from 'react'

interface IProps {
    runIterator: () => void;
    initialRun: () => void;
}

const Controller:FC<IProps> = (props: IProps) => {
    const [updateInterval, setUpdateInterval] = React.useState<string>('1000')
    const [isRunning, setIsRunning] = React.useState<boolean>(false)
    const [generation, setGeneration] = React.useState<number>(0)
    const stopGame = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // e.preventDefault();
        // window.clearInterval(runGame)
        // console.log("Inside stop Game", runGame)
    }    


    const handleUpdateInterval = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("updated Interval to:", e.target.value)
        return setUpdateInterval(e.target.value)
    }

    const handleRun = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(generation === 0) { console.log('GENERATION 0'); props.initialRun();}  
        setGeneration(generation + 1)
        const flag = !isRunning;
        setIsRunning(!isRunning)
        console.log("current", isRunning, flag)
        if(flag) {
            await setInterval(props.runIterator, updateInterval)
            // console.log("Inside handleRUn",runGame)
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
            <div>Generation: {generation}</div>
        </div>
    )
}

export default Controller
