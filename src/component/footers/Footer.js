import React from 'react'

export default function Footer({name,email,address,bankname,mobileno,website,AHNAME,accountnumber}) {
  name    ='Your compney Name';
  email   ='your@compney.com';
  mobileno='8700008000';
  address ='Compney Address';
  bankname='S Bank';
  AHNAME="Compney Pvt. Ltd.";
  accountnumber='38999998776';
  website='Compney.com';



  return (
    <footer>
        <i className='flex flex-wrap items-center justify-center'>|
          <span className='fw-bolder me-3 ml-3'>Name :</span>    {name} |
          <span className='fw-bolder me-3 ml-3'>Email: </span>   {email} |
          <span className='fw-bolder me-3 ml-3'>Mobile No:</span>{mobileno} |
          <span className='fw-bolder me-3 ml-3'>Address:</span>  {address} |
          <span className='fw-bolder me-3 ml-3'>Bank Name :</span> {bankname} |
          <span className='fw-bolder me-3 ml-3'>Account holder Name: </span>{AHNAME} |
          <span className='fw-bolder me-3 ml-3'>Account no</span> {accountnumber} |
          <span className='fw-bolder me-3 ml-3'>Website</span>{ website } |
        </i>
    </footer>
  )
}
