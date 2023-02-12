    import React from 'react';
import Logo from './TRANSAUTOS PG.svg'

export const Title = () => {
    return (
        <>
        <div className='container_blob'>
            <SVG/>
        </div>
        <h1 className="title">
{/*             <span>TransAutos</span><br />
            <span> PG SAS</span> <br /> */}
        </h1>
        </>
    )
}

export const SVG = () => {
    return (
        <div >
            <img className='image' src={Logo} alt="Logo" />
        </div>
    )
}