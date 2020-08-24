# react-countdown-clock-timer
react-countdown-clock-timer provides a timer functionality using reactJS.

## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [Parameters](#parameters)
* [Styling](#styling)

## Installation

To install, you can use [npm](https://npmjs.org/):


    $  npm install react-countdown-clock-timer

## Examples

Here is a simple example of react-countdown-clock-timer being used in an app.

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
        console.log('Triggered when the timer starts')
      }}
      onPause = {()=> {
        console.log('Triggered when the timer is paused')
      }}
      onFinish = {()=> {
        console.log('Triggered when the timer finishes')
      }}
      onReset = {()=> {
        console.log('Triggered when the timer is reset')
      }}
      onResume = {()=> {
        console.log('Triggered when the timer is resumed')
      }}
      />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
```
## Parameters

| Name                              | Description                                                                                                      | Required  | Type     |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------|----------|----------|
| durationInSeconds   | Duration for which the timer runs                          | True     | integer  |
| formatted   | Renders the timer in a formatted way (Formatted: 51m 22s, Unformatted: 00:51:22)                         | False     | boolean  |
| timerId   | Timer resets when timerId changes                         | False     | any  |
| showPauseButton                 | Shows a button to pause/resume the timer if set to true | False    | boolean  |
| showResetButton                 | Shows a button to reset the timer if set to true                            | False     | boolean  |
| onStart            | A callback function to run when the timer starts                   | False     | ()=>void  |
| onFinish               | A callback function to run when timer finishes                                       | False | ()=>void |
| onPause   | A callback function to run when timer is paused | False | ()=>void |
| onResume               | A callback function to run when timer is resumed                                     | False | ()=>void |
| onReset               | A callback function to run when the timer is reset                                        | False | ()=>void |


## Styling
We've provided class names for the following elements which can be used to add styling to them.

- div wrapping the Timer - `timer-wrapper`
- div wrapping the Pause and Reset buttons - `buttons-wrapper`
- Pause button - `pause-button`
- Reset button - `reset-button`


