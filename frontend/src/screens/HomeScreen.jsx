import React from 'react'
import Hero from '../components/Hero';
import ZeldaCardScreen from './ZeldaCardScreen';

const HomeScreen = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <ZeldaCardScreen />
      </div>
    </div>
  )
}

export default HomeScreen