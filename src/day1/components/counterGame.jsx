import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import classes from './cg.module.css'
function Counter () {

    const { counter , incCounter , decCounter , resetCounter} = useCounter(0);
    const [disabled,setDisabled] = useState(false)

    useEffect(() => {
        if (counter === 0) {
            setDisabled(true)
        } else setDisabled(false)
    },[counter])

    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>{counter}</h1>
            <button className={classes.btn} onClick={incCounter}>Increase counter</button>
            <button className={classes.btn} onClick={decCounter} disabled={disabled}>decrease counter</button>
            <button className={classes.btn} onClick={resetCounter} disabled={disabled}>reaset counter</button>
        </div>
    )
}

export default Counter;