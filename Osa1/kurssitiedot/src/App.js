


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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course ={course.name}/>
      <Content part = {course.parts[0].name} exercises = {course.parts[0].exercises} 
        part2 = {course.parts[1].name} exercises2 = {course.parts[1].exercises} 
        part3 = {course.parts[2].name} exercises3 = {course.parts[2].exercises}/>
      <Total exercises = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

export default App
