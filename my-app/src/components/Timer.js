import React, { useState, useEffect } from 'react';



function Timer() {
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
  var cage = 0
  var fill = 0

  if (timer < 25800) {
    message = "Setup"
    count = ""
  }
  if (timer > 25800 & timer <= 35400) {
    message = "Caging"
    cage = timer - 25800
    count = Math.round(cage / 8)
  }
  if (timer > 35400 & timer <= 36000) {
    message = "Set Up"
    count = ""
  }
  if (timer > 36000 & timer <= 55800) {
    message = "Filling"
    fill = timer - 36000
    count = Math.round(fill / 15.5)
  }
  if (timer > 55800) {
    message = "Complete!!!"
    count = ""
  }


  return(
    <div>
      <h1>{message}</h1>
      <h1>{count}</h1>
    </div>
  )
}

export default Timer