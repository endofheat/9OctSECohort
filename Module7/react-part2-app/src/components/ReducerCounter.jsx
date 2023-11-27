import { useReducer } from 'react'

function ReducerCounter () {
  // useReducer takes a reducer function and the initial state value
  // returns array with the state variable and a dispatch function
  const [counter, dispatch] = useReducer(reducer, 0)

  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment' })
  }

  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: 'decrement' })
  }

  const handleIncrement5 = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: 'increment5' })
  }
  const handleDecrement5 = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: 'decrement5' })
  }

  return (
    <div className='ReducerCounter componentBox'>
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>

      <button onClick={handleIncrement5}>Reducer Increment by 5</button>
      <button onClick={handleDecrement5}>Reducer Decrement by 5</button>
    </div>
  )
}

export default ReducerCounter
