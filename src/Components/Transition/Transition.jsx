import React, {useRef, useEffect, useState} from 'react'
import './Transition.css'
import {Power4} from 'gsap'
import Helmet from 'react-helmet';

function Transition({timeline}) {
    const [count, setCount] = useState(0)
    const trans = useRef(null);
    const divNone = useRef(null);
    const number = useRef(null);
    useEffect(() => {
        const durationInSec = 3
        const body = document.querySelector("body");
        body.classList.add("overflowNone");
        // Front div out
        timeline.to(trans.current, {
            duration: durationInSec,
            x: window.innerWidth ,
            // x: 2500,
            ease: Power4.easeOut
        });
        setTimeout(()=>{
            trans.current.style.display = "none"
        }, durationInSec*1000);


        // 0 to 100  Counter
        var timeleft = 100;
        var downloadTimer = setInterval(function(){
          if(timeleft <= 0){
            clearInterval(downloadTimer);
          }
          setCount( 100 - timeleft);
          timeleft -= 1;
        }, (durationInSec-1)*10);
        // back div out
        timeline.to(divNone.current, {
            duration: durationInSec,
            ease: Power4.easeInOut,
            opacity: 0,
            delay:durationInSec-1
            },"-=3.5")
            
        // Number
            timeline.to(number.current, {
                duration: 3,
                ease: Power4.easeInOut,
                scale:2,
                // delay:durationInSec-2
                delay:-.5
            },"-=3.5")
            
        // back div out
            // timeline.to(divNone.current, {
            // duration: durationInSec,
            // ease: Power4.easeInOut,
            // opacity: 0,
            // delay:durationInSec-1.5
            // },"-=3.5")
            
            setTimeout(()=>{
                divNone.current.style.display = "none"
                body.classList.remove("overflowNone");
            }, (durationInSec+durationInSec+1)*1000);
    }, [])
    return (
        <div className='transitionMainDiv'>
            {
                (count<100) &&
      <Helmet><title> Loading... ( {`${ count}`} )</title></Helmet>
            }

           <div className="transition-effect2" ref={divNone}> <span ref={number} >{count}</span> </div> 
           <div className="transition-effect" ref={trans}></div> 
        </div>
    )
}
// 093C39
// 040404
export default Transition
