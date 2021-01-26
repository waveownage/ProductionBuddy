import React, { useState, useEffect } from 'react';

const walkingGif = "https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif" 
const setUpGif = "https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif"
const lunchGif = "https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"
const breakGif = "https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"
const celebrateGif = "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"
var image = ""


function Timer1050Cage2Fill2() {
  const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()) // default value can be anything you want

  useEffect(() => {
      setTimeout(() => setFakeCurrentDate(new Date()), 1000)
  }, [fakeCurrentDate])
  var currentTimeDate = new Date()
  var hour = currentTimeDate.getHours()
  var minute = currentTimeDate.getMinutes()
  var seconds = currentTimeDate.getSeconds()
  var timer = hour*60*60 + minute*60 + seconds
  var message = ""
  var count = 0
  var fill = 0

  console.log(timer)

  if (timer < 25800) {
    message = "Setup"
    count = ""
    image = setUpGif
  }
  if (timer > 25800 & timer <= 43200) {
    message = "Cage 2 Fill 2"
    fill = timer - 25800
    count = Math.round(fill / 25.14)
    image = walkingGif
  }
  if (timer > 43200 & timer <= 45600) {
    message = "40 Minute Lunch"
    count = ""
    image = lunchGif
  }
  if (timer > 45600 & timer <= 50400) {
    message = "Filling"
    fill = timer - 45600
    count = 692 + Math.round(fill / 25.14)
    image = walkingGif
  }
  if (timer > 50400 & timer <= 51600) {
    message = "20 Minute Break"
    count = ""
    image = breakGif
  }
  if (timer > 51600 & timer <= 55800) {
    message = "Filling"
    fill = timer - 51600
    count = 883 + Math.round(fill / 25.14)
    image = walkingGif
  }
  if (timer > 55800) {
    message = "Complete!!!"
    count = ""
    image = celebrateGif
  }


  return(
    <div>
      <img src={image} alt="loading..." />
      <h1>{message}</h1>
      <h1>{count}</h1>
    </div>
  )
}

export default Timer1050Cage2Fill2