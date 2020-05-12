import React from 'react'
import ReactDOM from 'react-dom'

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
      <Header header={course.name}/>
    
      <Content partsArray={course.parts}/>
    
      <Total exercisesTotal={course.parts}/>
    </div>
  )
}

const Header = (props) => {
 
  
  return (
    <h1>
      {props.header}
    </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part partName= {props.partsArray[0].name} partExercises= {props.partsArray[0].exercises}/>
      <Part partName= {props.partsArray[1].name} partExercises= {props.partsArray[1].exercises}/>
      <Part partName= {props.partsArray[2].name} partExercises= {props.partsArray[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      {props.exercisesTotal[0].exercises + props.exercisesTotal[1].exercises + props.exercisesTotal[2].exercises} 
    </p>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.partName} {props.partExercises}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))