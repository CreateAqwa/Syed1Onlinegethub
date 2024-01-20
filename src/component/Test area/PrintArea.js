import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MainDetails from '../mainDetails/MainDetails';
import ClientDetailes from '../clientDetailes/ClientDetailes';
import Dates from '../dates/Dates';
import Tables from '../table/Table';
import Footer from '../footers/Footer';

const PrintArea = (id) => {
    const Useparms=useParams();
    const [GetData, setGetData] = useState([])
    const [listdata, setListdata] = useState([])
    
    // console.log(Useparms.id);
    
    // useNavigate=useNavigate()
    // useNavigate(`/PrintArea/${Useparms.id}`)
    useEffect(() => {
        axios.get("http://localhost:5000/posts/"+Useparms.id)
        .then((res) => {
            console.log(res.data);
            id=Useparms.id
            setGetData(res.data)
            const result1 = res.data.list.map(element=>{
                // console.log(element,'elementelementelement');
                return element;
              });
              setListdata(result1)
        }).catch((err) => {
            console.log(err);
        });

        setTimeout(() => {
            window.print();
            window.close();
        }, 500);
    }, [])
    console.log(listdata,'listdatalistdata');

  return (
   <div   style={{border:"6px",borderStyle:"solid"}}>
    

        <MainDetails />
        <ClientDetailes clintname={GetData.clintname} clintaddress={GetData.clintaddress}/>
        <Dates invoicenumber={GetData.invoicenumber} todayDate={GetData.date} todaytime={GetData.time} />
        
        <table  className="table mt-3">
        <thead align='center'>
          <tr className='bg-dark text-white'>
            <th className='bg-dark text-white text-start'>S.no</th>
            <th className='bg-dark text-white text-start'>Item</th>
            <th className='bg-dark text-white text-start'>Price | Qty</th>         
            <th className='bg-dark text-white text-end'>Amount</th>
          </tr>
        </thead>
        <tbody className='justify-center'>
        {listdata.map((product,index)=>
                {
                    {/* return <label key={index}>{product.item}-{product.quantity}-₹{product.amount} ||&nbsp;</label> */}
                    
                    return <tr key={index}>
                                <td>{index+1}</td>
                                <td>{product.item}</td>
                                <td>{product.price} | {product.quantity}</td>
                                <td className='text-end'>{product.amount}</td>
                            </tr>
                }
                )}
                <tr><td></td><td></td><td></td><td className='bg-dark text-white text-end'>Total Amount  {GetData.total}</td></tr>
        </tbody>
        </table>
        <Footer/>
    

   </div>
  )
}

export default PrintArea
