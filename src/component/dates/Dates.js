import React, { useState } from 'react'

export default function Dates({invoicenumber,todayDate,todaytime}) {
  var setinvoicenumber=setinvoicenumber
  var invoicenumber=invoicenumber
  var now = new Date();
  // var invoicenumber = now.getFullYear()+""+(now.getMonth()+""+1)+""+now.getDate()+""+now.getHours()+""+now.getMinutes()+""+now.getSeconds()+""+now.getMilliseconds().toString();
  // var todayDate=now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate();
  // var todaytime= now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
  return (
    <div className='flex flex-col text-end justify-end mr-2'>
      <ul>
          <li>Invoice No : {invoicenumber}</li>
          <li>Invoice Data : {todayDate}</li>
          <li>Date : {todaytime}</li>
        </ul>       
    
    </div>
  )
}
