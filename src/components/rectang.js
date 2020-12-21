import React from 'react'

export default function rectang({primary,secondary,val}) {
    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--deg', val+'deg');
    bodyStyles.setProperty('--primary', primary);
    bodyStyles.setProperty('--secondary', secondary);

    return (
        <div id='reccenter'><div className='rectangle'></div></div>
    )
}