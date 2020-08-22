# react-countdown-clock-timer
react-countdown-clock-timer provides a timer functionality using reactJS.

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/):


    $  npm install react-countdown-clock-timer

## Examples

Here is a simple example of react-timer being used in an app.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Timer } from 'react-countdown-clock-timer';

const App = () => {
  return (
    <div className='timer-container'>
      <Timer
      durationInSeconds={120}
      formatted={true}
      showPauseButton={true}
      showResetButton={true}
      onStart = {()=> {
          console.log('Triggers when timer starts')
      }}
      onPause = {()=> {
          console.log('Triggers when timer is paused')
      }}
      onFinish = {()=> {
            console.log('Triggers when timer is finished')
      }}
      onReset = {()=> {
           console.log('Triggers when timer resets')
      }}
      onResume = {()=> {
            console.log('Triggers when timer resumes')
      }}
      />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
```
