import React from 'react'

export default function ClientDetailes({clintaddress,clintname }) {
  
  return (
    <>
    <div className=''>
        <h2>{clintname} </h2>
        <p>{clintaddress}</p>
    </div>

    
    </>
  )
}
