import React, { useEffect } from 'react'
import './cursor.scss'
const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('#cursor');
        const cursorStyle = cursor.style
        console.log(cursor);
        document.addEventListener('mousemove', e =>{
          requestAnimationFrame(() =>{
            cursorStyle.top = `${e.pageY - cursor.offsetHeight/2 }px`;
            cursorStyle.left = `${e.pageX - cursor.offsetWidth/2 }px`;
          })
          // cursor.setAttribute('style', 'top: '+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px;")
        })
        document.addEventListener('click', () =>{
          cursor.classList.add('cursorClick')
          setTimeout(() =>{
            cursor.classList.remove("cursorClick");
          }, 300)
        })
      }, [])
  return (
    <div id="cursor"></div>
  )
}

export default Cursor