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
  var trays = 0
  var message = "" 
  var count = 0
  var cage = 0
  var fill = 0
  var totalCage= 0

  if (timer >= 59400 & timer < 60000) {
    message = "Setup"
    count = ""
    image = setUpGif
  }
  if (timer >=60000 & timer <= 63600){
    message = "Caging"
    cage = timer - 60000
    totalCage = Math.round(cage / 4.5)
    image = walkingGif
  }
  if (timer > 63600 & timer <= 64200) {
    message = "Setup"
    count = ""
    image = setUpGif
  }
  if (timer > 64200 & timer <= 68400) {
    message = "Filling"
    fill = timer - 64200
    count = Math.floor(Math.round(fill / 7.0)/64)*64
    trays = count/64
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
    count = 576 + Math.floor(Math.round(fill / 7.0)/64)*64
    trays = count/64
    image = walkingGif
  }
  if (timer > 73800 & timer <= 75600) {
    message = "30 Minute Lunch"
    count = ""
    image = lunchGif
  }
  if (timer > 75600 & timer <= 86400) {
    message = "Filling"
    fill = timer - 75600
    count = 1216 + Math.floor(Math.round(fill / 7.0)/64)*64
    trays = count/64
    image = walkingGif
  }
  if (timer > 0 & timer <= 1800) {
    message = "Filling"
    fill = timer
    count = 2752 + Math.floor(Math.round(fill / 7.0)/64)*64
    trays = count/64
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
      <h1> Cages: {cageCount} </h1>
      <h1>Trays: {trays} Total Sips:{count}</h1>
    </div>
  )
}

export default Timer
