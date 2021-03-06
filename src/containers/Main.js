import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/containers/Main.css'
import '../styles/iconfonts.css'

export default function Main(props) {
  return (
      <div className='Main'>
        <Navbar />
        {props.children}
        <Footer />
      </div>
  )
}
