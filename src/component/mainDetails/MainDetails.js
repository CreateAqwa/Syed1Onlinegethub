import React from 'react'

export default function MainDetails({name,address}) {
  name='Compney Pvt. Ltd.'
  address='Compney Gaya Bihar 823001'
  return (
    <>
    <div className="container text-center" >
        <h3>{name}</h3>
        <h6>{address}</h6>
        <h6>Gst no : 07BIXR009090887</h6>

    </div>
    <hr className='p-0'  style={{color:"blue",borderWidth:"1rem"}}/>
    {/* <section className='flex flex-col text-end justify-end mr-1'>
      
    </section> */}
    </>
  )
}
