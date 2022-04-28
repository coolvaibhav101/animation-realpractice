import logo from './logo.svg';

import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import './home.css'
import gsap from 'gsap';
import Transition from '../Transition/Transition';



const Home = () => {
    const about = gsap.timeline();

    const aboutimg = useRef(null);
    useEffect(() => {

        // about.from(abouth1.current, {
        //     duration: .6,
        //     skewX: 10,
        //     x: -100,
        //     opacity: 0
        // },"-=3.5")
        // about.from(aboutimg.current, {
        //     duration: .5,
        //     y: -200,
        //     opacity: 0
        // },"-=3")
    })
  return (
      <>
      <Helmet><title>Home</title></Helmet>
      <header className="App-header">
        <Transition timeline={about}/>
        <img src={logo} className="App-logo" alt="logo"  ref={aboutimg}/>
        <p>
        We are futuristic tech DIGITAL MARKETING agency.  
        {/* we are futuristic tech digital marketing agency. */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://h3abizsol.com/landingpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About H3A
        </a>
      </header>
      </>
  )
}

export default Home