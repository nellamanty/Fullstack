import { useState } from 'react'

const Button = (props) =>{
  return (
    <button onClick={props.handleClick}>{props.buttonText}</button>
  )
}

const Header = (props) => {  
  return (
    <div>
      <h1>{props.header}</h1>   
    </div>
  )
}

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text={"good"} value={props.good} />
        </tr>
        <tr>
          <StatisticLine text={"neutral"} value={props.neutral} />
        </tr>
        <tr>
          <StatisticLine text={"bad"} value={props.bad} />
        </tr>
        <tr>
          <StatisticLine text={"all"} value={props.all} />
        </tr>
        <tr>
          <StatisticLine text={"average"} value={props.average} />
        </tr>
        <tr>
          <StatisticLine text={"positive"} value={props.positive} />
        </tr>
        </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
    return (
      <><td>{props.text}</td>
      <td>{props.value}</td></>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad)/all
  const positive = all === 0 ? 0 : good/all*100

  return (
    <div>
      <Header header={"give feedback"} />
      <Button buttonText={"good"} handleClick={() => setGood(good + 1)} />
      <Button buttonText={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button buttonText={"bad"} handleClick={() => setBad(bad + 1)} />
      <h2>statistics</h2>
      { all === 0 ? <>No feedback given</> :
        <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all}
          average = {average} positive = {positive} />
      } 
    </div>
  )
}

export default App
