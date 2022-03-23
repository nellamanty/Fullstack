import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])

  const addOne = (index) => {
    const copy = [...vote]
    copy[index] += 1
    setVote(copy)
  }

  // const maxVotes = Math.max(...vote) === NaN ? 0 : Math.max(...vote)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      <p>has {vote[selected]} votes </p> <br />
      <button onClick= {() => setSelected(Math.floor(Math.random()*7))} >next anecdote</button>
      <button onClick= {() => addOne(selected)} >vote</button>

      <h1>Anecdote with most votes</h1>
      {anecdotes[vote.indexOf(Math.max(...vote))]} <br />
      <p>has {Math.max(...vote)} votes </p>


    </div>
  )
}

export default App