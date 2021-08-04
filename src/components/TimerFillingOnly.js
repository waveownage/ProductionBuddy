import React, { useState, useEffect } from 'react';


const Timer = props => {
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
  if (a.hero.currentUser.football === true) {
    walkingGif = "https://media.giphy.com/media/vYuOdwunVxpJpGVTTg/giphy.gif"
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
  var fill = 0
  var percentage = 0

  if (timer < 25800) {
    message = "Setup"
    count = ""
    image = setUpGif
  }
  if (timer > 25800 & timer <= 43200) {
    message = "Filling"
    fill = timer - 25800
    count = Math.round(fill / 6.5)
    image = walkingGif
    percentage = Math.round(count/4000 * 100)
  }
  if (timer > 43200 & timer <= 45600) {
    message = "40 Minute Lunch"
    count = ""
    image = lunchGif
  }
  if (timer > 45600 & timer <= 50400) {
    message = "Filling"
    fill = timer - 45600
    count = 2677 + Math.round(fill / 6.75)
    image = walkingGif
    percentage = Math.round(count/4000 * 100)
  }
  if (timer > 50400 & timer <= 51600) {
    message = "20 Minute Break"
    count = ""
    image = breakGif
  }
  if (timer > 51600 & timer <= 55800) {
    message = "Filling"
    fill = timer - 51600
    count = 3388 + Math.round(fill / 6.86)
    image = walkingGif
    percentage = Math.round(count/4000 * 100)
  }
  if (timer > 55800 & timer < 59400) {
    message = "Complete!!!"
    count = ""
    image = celebrateGif
  }

  //~~~~~~~~~~~~~~~~~~2nd Shift~~~~~~~~~~~~~~~~~~~~~~~~~
  if (timer > 59400 & timer <= 60000 ) {
    message = "Setup"
    count = ""
    image = setUpGif
  }
  if (timer > 60000 & timer <= 68400) {
    message = "Filling"
    fill = timer - 60000
    count = Math.round(fill / 16.13)
    image = walkingGif
  }
  if (timer > 68400 & timer <= 69000) {
    message = "10 Minute Break"
    count = ""
    image = breakGif
  }
  if (timer > 69000 & timer <= 73800) {
    message = "Filling"
    fill = timer - 69000
    count = 521 + Math.round(fill / 16.13)
    image = walkingGif
  }
  if (timer > 73800 & timer <= 75600) {
    message = "30 Minute Lunch"
    count = ""
    image = lunchGif
  }
  if (timer > 75600  & timer <= 86400) {
    message = "Filling"
    fill = timer - 75600
    count = 819 + Math.round(fill / 16.13)
    image = walkingGif
  }
  if (timer > 0  & timer <= 1800) {
    message = "Filling"
    fill = timer
    count = 1489 + Math.round(fill / 16.2)
    image = walkingGif
  }
  if (timer > 1800 & timer <= 25800) {
    message = "Complete!!!"
    count = ""
    image = celebrateGif
  }




  return(
    <div>
      <img className={imageClass} src={image} alt="loading..." />
      <h1>{message}</h1>
      <h1>{count} &nbsp; &nbsp;   {percentage}%</h1>
    </div>
  )
}

export default Timer