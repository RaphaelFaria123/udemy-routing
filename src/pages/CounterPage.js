import React from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/useCounter';

function CounterPage({ initialCount }) {    
    const { count, increment, decrement, reset } = useCounter(initialCount);

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">Counter</h1>
            <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>-</button>
                <span className="text-3xl mx-4">{count}</span>
                <Button onClick={increment}>+</Button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterPage;