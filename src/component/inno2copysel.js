import React, { useEffect, useRef } from 'react'
import Footer from './footers/Footer'
import Notes from './notes/Notes'
import Headers from './header/Headers'
import ClientDetailes from './clientDetailes/ClientDetailes'
import Table from './table/Table'
import TableForm from './Tabel/TableForm'
import MainDetails from './mainDetails/MainDetails'
import Dates from './dates/Dates'
import { useState } from 'react'
import ReactToPrint from 'react-to-print'
  import { v4 as uuidv4 } from "uuid";
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import html2canvas from 'html2canvas'
import { click } from '@testing-library/user-event/dist/click'
import './inno.css'

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
  const myElementRef = useRef();
  const useReff=useRef();
  
  const save=()=>{
    var now = new Date()
          var todayDate=now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate().toString().padStart(2, "0");
          var todaytime= now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
       

      let data={
        id:uuidv4(), 
        total,
        date:todayDate,
        time:todaytime,
        list,
      }
      console.log(data,'datadtadtadtadtatdatdatdatdtatd');
      // SetshowInvoice(true)

    //   const popupWindow = window.open('', 'Print Window', 'width=600,height=400');
    //         popupWindow.document.open();
    //         popupWindow.document.write(
    //   '<html><head><title>Print</title></head><body><div id="print-content"></div></body></html>'
    // );

    // const printContent = componentRef.current;
    // console.log(printContent,'printContent');




      Hidextra()
      
      SetshowInvoice(true)
      let btn=useReff.current;
      // find
        console.log(btn,'btn');
        console.log('print');  
      setTimeout(() => {
      
      }, 1000);
        

        // let element = document.getElementById('modal')
        // console.log(element,'element');

      
        
                
  // // Get table contnt via id -----start
        // let printContents = document.getElementById('click').innerHTML
        // console.log(printContents,'printContents');

        // let originalContents = document.body.innerHTML;
        // document.body.innerHTML = printContents;
        // window.onclick()
        // document.body.innerHTML = originalContents; 
  // // get table contant via id------ end


      // axios.post('http://localhost:5000/posts',data)
      // .then((res) => {
      //   console.log(res.data,'save ooooooo');
        
      // }).catch((err) => {
      //   console.log(err);
      // });
      
      

    }
    // const element = myElementRef.current;
    //     console.log(element,'elelele');   
    //     // click(element)


// saved data show in List table
      const [data, setdata] = useState([]);
    useEffect(() => {
      
      // axios.get('http://localhost:5000/posts')
      // .then((res) => {
      //   console.log(res.data,'getdata in Getdata Component');
      //   setdata(res.data)
      // })
      // .catch((err) => {
      //   console.log(err);
      // });

      // for get data refresh
      
    },[])
    
    

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
            SetshowInvoice(true);
          }, 100);
    }

// Body to Image Convert-------------------------------------
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
// Body to Image Convert-------------------------------------

// saved data show in List table
  const ddeletedata=(id)=>{
    SetshowInvoice(true)
    axios.delete('http://localhost:5000/posts/'+id)
    .then((res) => {
      console.log(res.data);

      // getdata refresh start
      SetshowInvoice(true)
      setTimeout(() => {
        SetshowInvoice(false)
      }, 100);
      // getdata refresh end
    })
    .catch((err) => {
      console.log(err);
    });

  }
  // --------date invoice no time
    
  // --------date invoice no time
  const printbutton=()=>{
    window.print()
  }
  // let getelement=useRef.current;
// const useReff=useRef();


  // let hide=useReff.current;
  // element.style.color = 'red';
  // console.log(hide,'hide');


  const elementRef = useRef();
  const element = elementRef.current;
  const Hidextra = () => {
    // Access the DOM element using the ref
    
    console.log(element,'i am inside Hide elelemt');
    if (element)
    {
      // Change the color property of the element
      console.log('i am inside display none');
      element.style.display = 'none';
      element.print()

      setTimeout(() => {
        element.style.display = 'block';
      }, 2000);
    }
  };
    

  


return (
    
    <main className='m-5  mx-auto rounded-2 shadow bg-success-subtle' >
    {/* <main className='m-5 lg:max-w-xl mx-auto bg-info rounded-2 shadow'></main> */}

   

  {showInvoice ? 
  <>
  <div  ref={elementRef} className='element-to-hide btn btn-info w-100 text-white text-start' id='second' >  
        <div  align='right' className='mb-5' >
            <div id="modal" ><ReactToPrint id='click' ref={useReff} trigger={()=> <button  className="btn btn-dark rounded-0">Print</button> }content={()=> componentRef.current} /></div>
            
            <div onClick={handleDownloadImage} className="btn btn-warning rounded-0">Download</div>  
        </div>
        
        <div align='right' ><button align='right' onClick={() => SetshowInvoice(false)} className='btn btn-warning rounded-0'>Back</button></div>
  </div>


  {/* <div ref={componentRef} id="print" className='p-14'> */}
  <div ref={componentRef} id="print-content" className='p-14'>
  
          
      {/* <Headers /> */}
      <MainDetails name={name} address={address} />
      <ClientDetailes clintaddress={clintaddress} clintname={clintname}  />
      <Dates invoicenumber={invoicenumber} todayDate={todayDate} todaytime={todaytime} />
      <Table item={item} price={price} quantity={quantity} amount={amount} list={list} setlist={setlist} total={total} settotal={settotal} SetshowInvoice={SetshowInvoice} showInvoice={showInvoice} className='amount' />
      <Notes notes={notes} />
      <Footer name={name} email={email} address={address} mobileno={mobileno} website={website} accountnumber={accountnumber} />

      
  </div>
  <div className="container">
      <div align='center' >
      {/* <button className="btn btn-outline-primary rounded-0 mt-2">Save</button> */}
      <span>
          
          <button  onClick={printbutton} className="btn btn-dark rounded-0 w-50 " id='click' >1Print</button>
          
          
      </span>
      {/* <span onClick={handleDownloadImage} className="btn btn-warning rounded-0">Download</span>   */}
  </div>
  </div>

</>
  : 
  <>
  <div className="row ">
  
  <div className='btn-info w-100 text-white text-start'>
  
        {/* <div align='right' className='mb-5'>
            <ReactToPrint trigger={()=> <button className="btn btn-dark rounded-0">Print</button> }content={()=> componentRef.current} />
            <div onClick={handleDownloadImage} className="btn btn-warning rounded-0">Download</div>  
        </div>
        
        <div align='right' >
              <button align='right' onClick={() => SetshowInvoice(true)} className='btn btn-warning rounded-0'>Back</button>
        </div> */}
        
  </div>
    {/* <div className="col-md-6">
        <div align='center' className='flex flex-col m-5'>
            <label  className='mt-3 fs-5 shadow'>Enter a Name</label>
            <input type="text" name="text" value={name} onChange={(e)=> setname(e.target.value)} id="text" className='p-3' placeholder='Enter a Name'  />

            <label className='fs-5 shadow'>Enter a Address</label>
            <input type="text" name="address" value={address} onChange={(e)=> setaddress(e.target.value)} id="text" className='p-3' placeholder='Enter a Address'  />

            <label className='fs-5 shadow'>Enter a Email</label>
            <input type="email" name="email" value={email} onChange={(e)=> setemail(e.target.value)} id="text" className='p-3' placeholder='Enter a Email'  />

            <label className='fs-5 shadow'>Enter a Mobile No</label>
            <input type="tel" name="mobileno" value={mobileno} onChange={(e)=> setmobileno(e.target.value)} id="text" className='p-3' placeholder='Enter a Email'  />
            
            <label className='fs-5 shadow'>Enter a Web Site</label>
            <input type="url" name="website" value={website} onChange={(e)=> setwebsite(e.target.value)} id="text" className='p-3' placeholder='Enter a Web Site'  />
            
            <label className='fs-5 shadow'>Enter Account no</label>
            <input type="number" name="accountnumber" value={accountnumber} onChange={(e)=> setaccountnumber(e.target.value) } id="text" className='p-3' placeholder='Enter a Web Site'  />
            
            <label className='fs-5 shadow'>Enter Bank Name </label>
            <input type="text" name="bankname" value={bankname} onChange={(e)=> setbankname(e.target.value) } id="text" className='p-3' placeholder='Enter a Web Site'  />
        </div>
    </div> */}

    <div className="col-md-6">
        <div align='center' className='flex flex-col m-5'>    
        <div className='flex flex-col '>
          <label className='fs-5 shadow'>Client Name </label>
          <input type="text" name="clintname" value={clintname} onChange={(e)=> setclintname(e.target.value) } id="text" className='p-1' placeholder='Enter Client Name'  /> 
          
          <label className='fs-5 shadow'>Client Address </label>
          <input type="text" name="clintaddress" value={clintaddress} onChange={(e)=> setclintaddress(e.target.value) } id="text" className='p-1' placeholder='Enter Client Address'  />
      </div>
            
        </div>
        
    </div>


    <div className="col-md-6">
    <TableForm item={item} setitem={setitem} price={price} setprice={setprice} quantity={quantity} setquantity={setquantity} amount={amount} setamount={setamount} list={list} setlist={setlist} total={total} settotal={settotal}  />
    <button  onClick={save} className="btn btn-primary rounded-0">Save Json Axios</button>
      
    </div>
        {/* <label className='fs-5 shadow'>Notes</label>
        <textarea  name="notes" value={notes} onChange={(e)=> setnotes(e.target.value) } id="text" className='' placeholder='Additional Notes' autoComplete='off'  cols="30" rows="3"></textarea><br /> */}

        <button onClick={()=> SetshowInvoice(true)} className='rounded  bg-warning mt-3 mb-2 p-3 shadow m-auto w-50'>Preview Invoice</button>
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
                    <td><button onClick={() => sss(item.id) } className="border-1 btn-success btn">Invoice</button></td>

                    
                    <td><button onClick={() => ddeletedata(item.id)} className="border-1 btn-danger btn">Delete</button></td>
                    {/* <td><Link to={`/OneData/${item.id}`}>Invoice</Link></td> */}
                </tr>
            </tbody>
        )}
        </table>

  </>
  }







 

    </main>
    
    )
}
 export default Inno


