


const Total = (props) => {  
  return (
    <div>
      <p>{props.exercises}</p>   
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {  
  return (
    <div>
      <Part part = {props.part} exercises = {props.exercises}/>
      <Part part = {props.part2} exercises = {props.exercises2}/> 
      <Part part = {props.part3} exercises = {props.exercises3}/> 
    </div>
  )
}

const Header = (props) => {  
  return (
    <div>
      <h1>{props.course}</h1>   
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = 'Fundamentals of React'
  const exercises = 10
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course ={course}/>
      <Content part = {part} exercises = {exercises} part2 = {part2} exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3}/>
      <Total exercises = {exercises + exercises2 + exercises3}/>
    </div>
  )
}

export default App
