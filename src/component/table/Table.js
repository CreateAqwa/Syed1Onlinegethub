import React from 'react'

export default function Tables({list,total}) {
  return (
    <>
      <table  className="table mt-3">
        <thead align='center'>
          <tr className='bg-dark text-white'>
            <th className='bg-dark text-white w-75 text-start'>Item</th>
            <th className='bg-dark text-white '>Qty</th>
            <th className='bg-dark text-white'>Price</th>
            <th className='bg-dark text-white w-25'>Amount</th>
          </tr>
        </thead>


  <tbody align='center'>
  {list.map(({ id,item,quantity,price,amount})=>(
    // use this=> import React, { useEffect } from "react" 
    <React.Fragment key={id}>
      <tr>
        <td className='text-start'>{item}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{amount}</td>
      </tr>
    </React.Fragment>
        
      ))}
      <tr><td></td><td></td><td></td><td>Total Amount  {total.toLocaleString()}</td></tr>
  </tbody>
</table>

    </>
  )
}
