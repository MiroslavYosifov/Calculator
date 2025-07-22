'use client'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { increment, decrement } from '@/redux/slices/counterSlices';

type Props = {
  prefill: {
    counter: number
    messages: {
        increment: string
        decrement: string
    }
  }
}

export function Counter({ prefill }: Props) {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const [counterData, setCounterData] = useState(prefill);
    const [counterMessage, setCounterMessage] = useState("Start to increment or decrement the counter");

    // const incrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {

    //     setCounterMessage(counterData.messages.increment);
    //     setCounterData(counterData => ({
    //         ...counterData,
    //         counter: counterData.counter + 1,
    //     }))        
    // }

    // const decrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {

    //     setCounterMessage(counterData.messages.decrement);
    //     setCounterData(counterData => ({
    //         ...counterData,
    //         counter: counterData.counter - 1,
    //     }))
    // }

    return (
        <section> 
            <h1>Counter</h1>
            {/* <p>{counterMessage}</p> */}
            <p>Counter: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            {/* <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button> */}
        </section>
    )
}