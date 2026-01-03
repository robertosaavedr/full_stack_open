import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => (
  <table>
    <tbody>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.good + props.neutral + props.bad} />
      <StatisticsLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
      <StatisticsLine text="positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100 + '%'} />
    </tbody>
  </table>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (value, setValue) => {
    console.log('clicked the button')
    setValue(value + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => handleClick(good, setGood)} text="good" />
      <Button onClick={() => handleClick(neutral, setNeutral)} text="neutral" />
      <Button onClick={() => handleClick(bad, setBad)} text="bad" />
      <h2>statistics</h2>
      {good + neutral + bad === 0 ? (
        <p>No feedback has been given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  )
}

export default App