'use client'
import { useState } from 'react'

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
    const [counterData, setCounterData] = useState(prefill);
    const [counterMessage, setCounterMessage] = useState("Start to increment or decrement the counter");

    const incrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {

        setCounterMessage(counterData.messages.increment);
        setCounterData(counterData => ({
            ...counterData,
            counter: counterData.counter + 1,
        }))        
    }

    const decrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {

        setCounterMessage(counterData.messages.decrement);
        setCounterData(counterData => ({
            ...counterData,
            counter: counterData.counter - 1,
        }))
    }

    return (
        <section> 
            <h1>Counter</h1>
            <p>{counterMessage}</p>
            <p>Counter: {counterData.counter}</p>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </section>
    )
}