import React, { useState, useEffect } from 'react';


const Timer1200normal = props => {
  const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date()) // default value can be anything you want
  
  var a = props

  const setUpGif = "https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif"
  const lunchGif = "https://media.giphy.com/media/KeEnqOWYF7tgE4uPyL/giphy.gif"
  const breakGif = "https://media.giphy.com/media/RiWZUGcZPEKdQgrQ96/giphy.gif"
  const celebrateGif = "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"
  var walkingGif = "https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif"
  var image = ""
  var imageClass = ""

  if (a.hero.currentUser.boy === true) {
    walkingGif = "https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif"
    imageClass = "mario"
  }
  if (a.hero.currentUser.girl === true) {
    walkingGif = "https://i.pinimg.com/originals/55/3a/4a/553a4a6c08af1bdd956b6a32fe0b3a49.gif"
    imageClass = "mario"
  }
  if (a.hero.currentUser.luigi === true) {
    walkingGif = "https://steamuserimages-a.akamaihd.net/ugc/171541089271096213/CFFE888350DD504CD34EE54A001179564F45B30A/"
    imageClass = "mario"
  }


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
    image = setUpGif
  }
  if (timer > 25800 & timer <= 35400) {
    message = "Caging"
    cage = timer - 25800
    count = Math.round(cage / 4)
    image = walkingGif
  }
  if (timer > 35400 & timer <= 36000) {
    message = "Set Up"
    count = ""
    image = setUpGif
  }
  if (timer > 36000 & timer <= 43200) {
    message = "Filling"
    fill = timer - 36000
    count = Math.round(fill / 13.5)
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
    count = 533 + Math.round(fill / 13.5)
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
    count = 889 + Math.round(fill / 13.5)
    image = walkingGif
  }
  if (timer > 55800) {
    message = "Complete!!!"
    count = ""
    image = celebrateGif
  }


  return(
    <div>
      <img className={imageClass} src={image} alt="loading..." />
      <h1>{message}</h1>
      <h1>{count}</h1>
    </div>
  )
}

export default Timer1200normal