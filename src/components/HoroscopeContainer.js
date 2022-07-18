import React from 'react'
import './HoroscopeContainer.css'

const HoroscopeContainer = (props) => {
  const {horoscope, userName, userZodiac, resetHome} = props
  return(
    <div className='horoscope-container'>
      <h1>{userName}'s Horoscope For Today</h1>
      <h2>For a {userZodiac}</h2>
      <p>{horoscope.description}</p>
      <p>Your lucky number is: {horoscope.lucky_number}</p>
      <button onClick={resetHome}>Get Another Horoscope!</button>
    </div>
  )
}

export default HoroscopeContainer
