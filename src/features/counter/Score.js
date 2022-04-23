import { useSelector } from "react-redux";

const Score = () => {
    const score = useSelector(state => state.counter.value);
    return (
        <>
        <h2>Score</h2>
        <h3>{score}</h3>
        </>
    )
}

export default Score;