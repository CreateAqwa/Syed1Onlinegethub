import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OneData from './OneData';
import { Link } from 'react-router-dom';
import Inno from '../Inno';
import Headers from '../header/Headers';


export default function Getdata() {

    const [data, setdata] = useState([]);
    const [showInvoice, SetshowInvoice] = useState(false)
    const [onedatapage, setonedatapage] = useState({});
    const [list, setlist] = useState([])
    useEffect(() => {
            axios.get('http://localhost:5000/posts')
            .then((res) => {
              console.log(res.data,'getdata in Getdata Component');
              
              setdata(res.data)
            })
            .catch((err) => {
              console.log(err);
            });
    }, [])




    const sss=(id)=>{
        console.log(id,'idididididi');
        axios.get('http://localhost:5000/posts/'+id)
              .then((res) => {
                  setonedatapage(res.data)
              //  const result1 = onedatapage.list.map(element => {
                // SetshowInvoice(true);
                  const result1 = res.data.list.map(element=>{
                    // console.log(element,'elementelementelement');
                    return element;
                  });
                  setlist(result1)
                  SetshowInvoice(false);
                  
                  // console.log(result1);
                  // console.log(onedatapage.map((item,index)=> {return item.list}),'onedatapageeeeee');
                  // console.log(result1.map(item=>{return item.amount}),'result1111111');
                  // SetshowInvoice(true)
              }).catch((err) => {
                  console.log(err);
              });
              // json array inside array Target -------------------------------------
              
              // json array inside array Target -------------------------------------
            setTimeout(() => {
              SetshowInvoice(true);
            }, 100);
      }
      const ddeletedata=(id)=>{
        SetshowInvoice(true)
        axios.delete('http://localhost:5000/posts/'+id)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
  return (
    <>
    <Headers />
        
        <table className='table w-75 border m-auto bg-info'>
                <thead>
                    <tr>
                        <th>Trackid</th>
                        <th>Date</th>
                        <th>Product (item,quantity price)</th>
                    </tr>
                </thead>
        {data.map((item,index)=>
            <tbody key={index}>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>
                        {item.list.map((product,index)=>
                        {
                            return <label key={index}>{product.item}-{product.quantity}-₹{product.amount} ||&nbsp;</label>
                        }
                        )}
                    </td>
                    <td><button onClick={() => sss(item.id) } className="border-1 btn-success btn">Invoice</button></td>

                    
                    <td><button onClick={() => ddeletedata(item.id)} className="border-1 btn-danger btn">Delete</button></td>
                    {/* <td><Link to={`/OneData/${item.id}`}>Invoice</Link></td> */}
                </tr>
            </tbody>
        )}
        </table>


    </>
  )
}

