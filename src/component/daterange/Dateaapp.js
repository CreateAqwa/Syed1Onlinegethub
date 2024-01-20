import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import html2canvas from 'html2canvas';

// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Headers from '../header/Headers';

import { DownloadTableExcel } from 'react-export-table-to-excel';
const Dateaapp = () => {
    

    const [time, settime] = useState('')
    const [dataT, setdataT] = useState(false)
    const [ssdate, setssdate] = useState('');
    const [todate, settodate] = useState('');
    const [alert, setalert] = useState('');

  //   console.log(jsondata,'---------------');
  console.log(ssdate,'ssdate ');
  
   
    const [onlinedata, setonlinedata] = useState([]);
    const [store, setstore] = useState([])
    // console.log(ssdate,'Input date ssdate');
    // console.log(todate,'Input date todate');
var now = new Date();
var today = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()
    

    const ddate=(e)=>{
      e.preventDefault();

          //  useEffect()  
        setdataT(true)
              // ============start==============================
              // var sDate = new Date("2023-10-01");
              // var toDate = new Date("2023-10-02");
              var sDate = new Date(ssdate);
              var toDate = new Date(todate);
              
            //   console.log(sDate,toDate,'Functuion sDate,toDate');
  
              const resultProductData = onlinedata.filter(a => {
              console.log(a.date,'.a.date');
  
                
              var date = new Date(a.date);
                //   console.log(date,'date');
              // console.log(date >= startDate && date <= endDate,'date >= startDate && date <= endDate');
                if (sDate !== toDate)
                {
                      if (sDate <= toDate)
                      {
                          return (date >= sDate && date <= toDate);   
                      }
                      else{
                            setalert(" Start Data is Grater Then End  Date")
                          setTimeout(() => {
                            setalert("")
                          }, 2000);
                      }
                }
                else if (sDate === toDate)
                {
                          return (date == sDate && date == toDate);
                }
  
              });
                setstore(resultProductData)
  
              console.log(resultProductData,'resultProductData')
              console.log(onlinedata,'oooonline----')
  
    // ========End==================================
    }
  
      useEffect(() => {
        console.log('I am Use Efect');
        // get current date
        
        // get current date

        axios.get("http://localhost:5000/posts")
        .then((res) => {
            setonlinedata(res.data)

            setTimeout(() => {
                setonlinedata(res.data)
            }, 1000);
            
            console.log(onlinedata,'i am getdata');
        })
        .catch((err) => {
            console.log(err);
            
        });

  
      
   
    

      
    },[time])


    const handelprint=()=>{
        window.print()
    }
    const handleDownloadImage = async () => {
        const element = document.getElementById('saveimg'),
        canvas = await html2canvas(element),
        data = canvas.toDataURL('image/jpg'),
        link = document.createElement('a');
     
        link.href = data;
        link.download = today+'__'+ssdate+"/"+todate+'-REPORTS.jpg';
     
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


    //   total useffect--start---------
    const [total, settotal] = useState(0);
    const [Gst, setGst] = useState(0);
    const [percentGst, setpercentGst] = useState(0);
    console.log(Gst);
    const [percentage, setpercentage] = useState();

    useEffect(() => {
        settotal(0)
        setGst(0)
        let rows=document.querySelectorAll(".amount")
        let sum=0
        for (let i = 0; i<rows.length;i++){
          if (rows[i].className === "amount")
          {
              sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
              settotal(sum)

          }
          setGst(parseFloat(total*percentGst).toFixed(2))
          
          // console.log(total,'tototototo')
        }
    })
    //   total useffect--end---------

    const tableRef = useRef(null);
  return (
    <>
<Headers />
    
    
    <center className='fs-1 bg-dark mb-5'><font color='Blue' style={{fontWeight:"bolder"}}>REPORTS </font></center>
    

        <form action="" onSubmit={ddate} method='POST'>
        <div align='center'>
            <div className="input-group mb-3 " style={{width:'50%'}} >
                <span className="input-group-text" id="basic-addon1">Start Date</span>
                <input type='date' name="ssdate"  onChange={(e)=> setssdate(e.target.value)} className="form-control" id="datePicker" />

                {/* <span className="input-group-text" id="basic-addon1">Time</span>
                <input type='time' name="time"  onChange={(e)=> settime(e.target.value)} className="form-control" /> */}
            </div>

            
            <div className="input-group mb-3 " style={{width:'50%'}} >
                <span className="input-group-text" id="basic-addon1">End Date</span>
                <input type="date" name="todate"  onChange={(e)=> settodate(e.target.value)} className="form-control" id="datePicker" />

                {/* <span className="input-group-text" id="basic-addon1">Time</span>
                <input type='time' name="Totime" value={Totime}  onChange={(e)=> setTotime(e.target.value)} className="form-control" /> */}
            </div>
        </div>

            
        <br/>
            <center className='mb-3'>
            <div className='bg-danger w-50 rounded-2 mb-2 text-white fs-4'>{alert}</div>

            <input  type="submit" value="Submit"  className='btn btn-success' style={{width:'50%'}}  />
            </center>
        </form>

        
            <div align="right" className='container'>
            <div className=' input-group mb-3 w-25'  >
            <span className="input-group-text" id="basic-addon1">Set Gst %</span>
                <select  onChange={(e)=> setpercentGst(e.target.value)} className='form-control'>
                    <option value="0.0">0 </option>
                    <option value="0.05">5 </option>
                    <option value="0.12">12</option>
                    <option value="0.18">18</option>
                    <option value="0.28">28</option>
                </select>
            </div>
            </div>

        
        
<div id='saveimg' >  

    <table className='table table-striped w-75 ' align='center' id='table-to-xls' ref={tableRef} >
        <thead>
            <tr >
                
                <th colSpan={2}>{"Reports "+today+"___"+ssdate+'/'+todate}</th>
                
            </tr>
        </thead>

        <thead>
            <tr>
                <th>S.no</th>
                <th>Total</th>
            </tr>
        </thead>
        {dataT ? 
    <>
    {store.map((item,index)=>

        <tbody key={index}>
            <tr>
                <td>{index+1}</td>
                <td className='amount'>{item.total}</td>
            </tr>
        </tbody>
    )}
    <tbody>
    <tr>
      
        <td>
            <div className="text-end table  h3">Total Amount {total.toLocaleString()}
            </div>
        </td>
    </tr>
    <tr>
      
        <td>
            <div className="text-end table h3">GST {(percentGst*100).toFixed(0)}%  = +{Gst}
            </div>
        </td>
    </tr>
    <tr>
      
        <td className="text-end table  h3">Grand Total {parseFloat(total+parseFloat(Gst))}</td>
    </tr>
    </tbody>
    
    </>
    :
    <>
    <tbody><tr><td><h1 align='center'> Welcome to Reports</h1></td></tr></tbody>


    </>
            }
        

    </table>
</div>


    <div align='right' className='container'>
        <div align='center' className='btn-group w-50 ' >

            <button onClick={handleDownloadImage} type="button" className="btn btn-info">Save Image</button>

            <DownloadTableExcel filename={"Reports "+today+"_"+ssdate+'/'+todate} sheet="users" currentTableRef={tableRef.current}    >
                   <button  className="btn btn-warning download-table-xls-button rounded-0" > Export excel </button>
                </DownloadTableExcel>

            
            <button onClick={handelprint} type="button" className="btn btn-success">Print</button>
            

           
        </div>
    </div>

    <br /><br />
    </>
  )
}

export default Dateaapp
