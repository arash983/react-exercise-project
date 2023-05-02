import { useState } from "react"

export const useCounter = (number) => {
    const [counter,setCounter] = useState(number);

    const incCounter = () => {
        setCounter((perv) => perv + 1);
    }

    const decCounter = () => {
        setCounter((perv) => {
            if (perv > 0) {
                return perv - 1
            }
            return perv;
        });
    }
    const resetCounter = () => setCounter(0)

    return { counter , incCounter , decCounter , resetCounter};
}