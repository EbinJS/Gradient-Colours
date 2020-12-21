import React from 'react'

export default function Heading() {
    function mode(){
          document.body.classList.toggle('dark');
        }
    return (
        <div className='head'>
            <div id='title'>GRADIENT COLOURS</div>
            <div id='btn'><button className='mode' onClick={mode}><i className="gg-dark-mode"></i></button></div>
        </div>
    )
}
