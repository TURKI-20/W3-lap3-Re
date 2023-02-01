import React from 'react'

interface Programers{
    name: string,
    languages: string[],
    yearsOfEx: number,
    company: string,
}



function Programers(props:Programers) {
  return (
    <div className='programers'>

        <div className='content'>

            <h1>{props.name}</h1>
            <h3 className='arr'>{props.languages}</h3>
            <h3>{props.yearsOfEx}</h3>
            <h3>{props.company}</h3>

        </div>

    </div>
  )
}

export default Programers