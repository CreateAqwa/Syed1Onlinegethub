import React, { useEffect, useRef } from 'react'
import Footer from './footers/Footer'
import Notes from './notes/Notes'

import ClientDetailes from './clientDetailes/ClientDetailes'
import Table from './table/Table'
import TableForm from './Tabel/TableForm'
import MainDetails from './mainDetails/MainDetails'
import Dates from './dates/Dates'
import { useState } from 'react'
import ReactToPrint from 'react-to-print'
  import { v4 as uuidv4 } from "uuid";
import axios from 'axios'
import {  useNavigate,} from 'react-router-dom'
import html2canvas from 'html2canvas'

import './inno.css'


import Headers from './header/Headers'



function Inno()  {
  const [showInvoice, SetshowInvoice] = useState(false)
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [bankname, setbankname] = useState("");
  const [accountnumber, setaccountnumber] = useState("");
  const [website, setwebsite] = useState("");
  const [clintname, setclintname] = useState("");
  const [clintaddress, setclintaddress] = useState("");
  const [invoicenumber, setinvoicenumber] = useState();
  const [todayDate, settodayDate] = useState('');
  const [todaytime, settodaytime] = useState('');
  const [notes, setnotes] = useState("");

  const [item, setitem] = useState("");
  const [quantity, setquantity] = useState(1);
  const [price, setprice] = useState();
  const [amount, setamount] = useState();
  const [total, settotal] = useState(0)

  const [list, setlist] = useState([])


  const componentRef=useRef();  
  const Popbodyref=useRef();
  let popbodyIS=Popbodyref.current;
  
        // console.log(componentRef.current,'componentRef.current');

  
        console.log(list.length,'list.id');
       
  const save=()=>{
    
    var now = new Date()
          var todayDate=now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate().toString().padStart(2, "0");
          var todaytime= now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    var invoicenumber = now.getFullYear()+""+(now.getMonth()+""+1)+""+now.getDate()+""+now.getHours()+""+now.getMinutes()+""+now.getSeconds()+""+now.getMilliseconds().toString();
    
      let data={
        id:uuidv4(), 
        total,
        date:todayDate,
        time:todaytime,
        list,
        invoicenumber,
        clintname,
        clintaddress
      }
      // if (agar table ma kuch ha to save karo)
      if (list.length >=1){
        
      console.log(data,'datadtadtadtadtatdatdatdatdtatd');


      console.log(popbodyIS,'popbodyIS');
      console.log(Popbodyref,'Popbodyref');
        // SetshowInvoice(true)
  
        axios.post('http://localhost:5000/posts',data)
        .then((res) => {
          console.log(res.data,'save ooooooo');
          let id=res.data.id
          console.log(id);
            window.open('/PrintArea/'+id, 'Print Window', 'width=600,height=400');
            
            
          
        })
        .catch((err) => {
          console.log(err,'Error inno Component ===save===');
        });
        datadataget()
        // setTimeout(() => {
        //   document.getElementById("myBtn").click();
        // }, 500);
    }

      
    }
    

// saved data show in List table
     
      const [data, setdata] = useState([]);
    useEffect(() => {
      
     
      datadataget()
      // for get data refresh
      
        // Add event listener for keydown when the component mounts
 window.addEventListener('keydown', aaa);

 // Remove the event listener when the component unmounts
 return () => {
   window.removeEventListener('keydown', aaa);
 };


    },[])
    
    const datadataget=()=>{
      axios.get('http://localhost:5000/posts')
      .then((res) => {
        console.log(res.data,'getdata in Getdata Component');
        setdata(res.data.reverse())
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    

    const [onedatapage, setonedatapage] = useState({});
    
    const sss=(id)=>{
      axios.get('http://localhost:5000/posts/'+id)
            .then((res) => {
                setonedatapage(res.data)
            //  const result1 = onedatapage.list.map(element => {
              // SetshowInvoice(true);
                const result1 = res.data.list.map(element=>{
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
            SetshowInvoice(false);
          }, 100);
    }

// Body to Image Convert-----start--------------------------------
    const handleDownloadImage = async () => {
      const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/jpg'),
      link = document.createElement('a');
   
      link.href = data;
      link.download = 'downloaded-image.jpg';
   
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
// Body to Image Convert-----end--------------------------------

// saved data show in List table
  const ddeletedata=(id)=>{
    // SetshowInvoice(true)
    axios.delete('http://localhost:5000/posts/'+id)
    .then((res) => {
      console.log(res.data);
      
      datadataget()
      // getdata refresh start
      // SetshowInvoice(false)
      
      // getdata refresh end
    })
    .catch((err) => {
      console.log(err);
    });

  }

  let keysPressed = {};
  const aaa=(event)=>{

    document.addEventListener('keydown', (event) => {
      keysPressed[event.key] = true;
   
      if (keysPressed['Control'] && event.key == 'Enter') {
          document.getElementById("myBtn").click();
      }
   });
    
   
        
  }
  
 
  const ReprintInvoice=(id)=>{
    console.log(id,'iddidd');
 
    axios.get('http://localhost:5000/posts/'+id)
    .then((res) => {
      console.log(res.data,' ReprintInvoice');
      
      console.log(id,'iddddd');
        window.open('/PrintArea/'+id, 'Print Window', 'width=600,height=400');
        
        
      
    })
    .catch((err) => {
      console.log(err,'Error inno Component ===save===');
    });
   }
return (
<>

<Headers />
    <main   className='rounded-2 shadow bg-success-subtle m-4'  >
    
    {/* <main className='m-5 lg:max-w-xl mx-auto bg-info rounded-2 shadow'> */}

  {showInvoice ? 

  
  <>
  {/* Header Start */}
    
    {/* header ENd */}
  <div  className='' id='second' >  
        <div  align='right' className='mb-5' >
            {/* top print */}
            
            <ReactToPrint trigger={()=> <button id="myBtn" onClick={aaa}  className="btn btn-dark rounded-0">Print</button> }content={()=> componentRef.current} />
            
            <div onClick={handleDownloadImage} className="btn btn-warning rounded-0">Download</div>  
        </div>
        
        <div align='right' ><button align='right' onClick={() => SetshowInvoice(false)} className='btn btn-warning rounded-0'>Back</button></div>
  </div>
  <div ref={componentRef} id="print" className='' >
  {/* <div className='p-14' ref={Popbodyref} id='print-content'> */}
  <div className='p-0' style={{border:"0.5rem",borderStyle:"solid"}} >
      <MainDetails name={name} address={address} />
      <ClientDetailes clintaddress={clintaddress} clintname={clintname}  />
      <Dates invoicenumber={invoicenumber} todayDate={todayDate} todaytime={todaytime} setinvoicenumber={invoicenumber} />
      <Table item={item} price={price} quantity={quantity} amount={amount} list={list} setlist={setlist} total={total} settotal={settotal} SetshowInvoice={SetshowInvoice} showInvoice={showInvoice} className='amount' />
      <Notes notes={notes} />
      <Footer name={name} email={email} address={address} mobileno={mobileno} website={website} accountnumber={accountnumber} />
      </div>
  </div>


  
  
  <div className="container">
      <div align='center' >
      {/* <button className="btn btn-outline-primary rounded-0 mt-2">Save</button> */}
      <span>
          
          <button   className="btn btn-dark rounded-0 w-50 " id='click' >1Print</button>
          
          
      </span>
      {/* <span onClick={handleDownloadImage} className="btn btn-warning rounded-0">Download</span>   */}
  </div>
  </div>

</>
   :
  <>
  <div className="row ">
  
  <div className='btn-info w-100 text-white text-start'>
  
    
  </div>
    

    <div className="col-md-6">
        <div align='center' className='flex flex-col m-5'>    
        <div className='flex flex-col '>
          <label className='fs-5 shadow'>Client Name </label>
          <input type="text" name="clintname" value={clintname} onChange={(e)=> setclintname(e.target.value) } id="text" className='p-1' placeholder='Enter Client Name'  /> 
          <br />
          <label className='fs-5 shadow'>Client Address </label>
          <input type="text" name="clintaddress" value={clintaddress} onChange={(e)=> setclintaddress(e.target.value) } id="text" className='p-1' placeholder='Enter Client Address'  />
      </div>
            
        </div>
        
    </div>


    <div className="col-md-6" onLoad={aaa}>
    {/* temporety Item save */}
    <TableForm item={item} setitem={setitem} price={price} setprice={setprice} quantity={quantity} setquantity={setquantity} amount={amount} setamount={setamount} list={list} setlist={setlist} total={total} settotal={settotal}  />
    {/* temporety Item save */}
    {/* <button  >aaaaaa</button> */}
    <button  onClick={save} className="btn btn-primary rounded-0">SAVE PRINT</button>
      
    </div>
    {/* ++++++++++++++++++++++++++++++++++++++++++++++++ */}

    




    {/* ++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* <label className='fs-5 shadow'>Notes</label>
        <textarea  name="notes" value={notes} onChange={(e)=> setnotes(e.target.value) } id="text" className='' placeholder='Additional Notes' autoComplete='off'  cols="30" rows="3"></textarea><br /> */}

        {/* <button onClick={()=> SetshowInvoice(true)} className='rounded  bg-warning mt-3 mb-2 p-3 shadow m-auto w-50'>Preview Invoice</button> */}
 </div>

 <h1 align='center'className='uppercase'>Getdata</h1>
        <table className='table w-75 border m-auto bg-info'>
                <thead>
                    <tr>
                        <th>Trackid</th>
                        <th>Total</th>
                        <th>Product (item,quantity price)</th>
                    </tr>
                </thead>
        {data.map((item,index)=>
            <tbody key={index}>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.total}</td>
                    <td>
                        {item.list.map((product,index)=>
                        {
                            return <label key={index}>{product.item}-{product.quantity}-₹{product.amount} ||&nbsp;</label>
                        }
                        )}
                    </td>
                    <td><button onClick={() => sss(item.id) } className="border-1 btn-success btn col" ><font size={30}>⌨</font><br /> ADD </button></td>
                    <td><button onClick={() => ReprintInvoice(item.id)} className="border-1 btn-danger btn"> <font size={30}>🗍</font>REPRINT</button></td>
                    
                    {/* <td><button onClick={() => ddeletedata(item.id)} className="border-1 btn-danger btn">Delete <font size={30}>🗑</font></button></td> */}
                    {/* <td><Link to={`/OneData/${item.id}`}>Invoice</Link></td> */}
                </tr>
            </tbody>
        )}
        </table>

  </>
}

    </main>    
</>
    )
}
 export default Inno



