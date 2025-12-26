const Header = (props) => {
  return (
    <h1>{props.msg}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
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
    <>
      <Header msg={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </>
  )
}

export default App
