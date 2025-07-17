import React from 'react'
import Home from './Home'
import Category from '../compo/Category'
import  Connect from '../pages/Contact'
import FeedbackPage from './Feedback'
import Footer from './Footer'

export default function Hero() {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500'>
        <Home/>
        <hr className='bg-gradient-to-r from-purple-500 to-pink-500' />
        <Category/>
        <hr></hr>
        <Connect />
        <FeedbackPage />
        <Footer/>
    </div>  
  )
}
