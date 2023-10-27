import React from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = React.useState(initialValue);

    React.useEffect(() => {
        console.log('useEffect called', count);
    }, [count]);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}

export default useCounter;