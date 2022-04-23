import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./CounterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(counterSlice.actions.increment());
    }

    const decrease = () => {
        dispatch(counterSlice.actions.decrement());
    }

    const addBy10 = () => {
        dispatch(counterSlice.actions.addBy(10));
    }

    const addBy20 = () => {
        dispatch(counterSlice.actions.addBy(20));
    }


    return (
        <>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={addBy10}>Add By 10</button>
        <button onClick={addBy20}>Add By 20</button>
        </>
    )
}

export default Counter;