const Header = (props) => {
  return (
  <div>
  <h1>{props.title}</h1>
  </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = ({exercises, parts}) => {
  console.log(exercises)
  return (
  <>
  <Part part = {parts.first} exercise={exercises.first}/>
  <Part part = {parts.second} exercise={exercises.second}/>
  <Part part = {parts.third} exercise={exercises.third}/>
  </>
  )
}

const Total = (numberexercise) => {
  return(
    <p>Number of exercises {numberexercise.sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = {
    first: part1,
    second:part2,
    third: part3
  }

  const exercises = {
    first: exercises1,
    second: exercises2,
    third: exercises3
  }

  return (
    <div>
      <Header title={course} />
      <Content exercises={exercises} parts={parts} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App