import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactToPrint from 'react-to-print'
import html2canvas from 'html2canvas'
import axios from 'axios';


export default function Headers() {
    const componentRef=useRef();
    
    
    const handelprint=()=>{
        window.print()
    }


   

    //   const elementRef = useRef();
    const [state, setstate] = useState()
    const [Login, setLogin] = useState('')
    var now = new Date()
    const Logout=()=>{
        setstate(false)
        let a={
          jsonState:false,
          todayDate:now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate().toString().padStart(2, "0"),
          todaytime: now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(),
          Loginbuton:'i am Logout',
          name:Login
  
        }
        axios.post('http://localhost:5000/loginVerify',a)
        .then((res) => {
          // console.log(res.data,'logout-=-=-=-');  
          setstate(false)
          

        }).catch((err) => {
        // console.log(err,'err -=-=logout');
        setLogin(err.code)
      });
       
    }
    const [EXPIREDATE, setEXPIREDATE] = useState('-=-');
    const [PackageAlert, setPackageAlert] = useState(false);
    const [setalert, setsetalert] = useState('');
    var currentdate = now.getFullYear()+""+(parseInt(now.getMonth())+1)+""+now.getDate().toString().padStart(2, "0");
    useEffect(() => {
        axios.get("http://localhost:5000/Activation")
        .then((res) => {
            console.log(res.data,'========');
            let lastData=res.data.reverse()
            
            // console.log(currentdate,'lastdata[0]');
            setEXPIREDATE("Recharge Over ="+lastData[0].ExpireDate)

            console.log(EXPIREDATE,'aa');
            let expireDateJson=lastData[0].Expire
                                    // console.log(expireDateJson,'lastdatalastdata');
                                    // console.log(encodeURI(currentdate),'encodeURI(currentdate)');
        
            if (parseInt(expireDateJson)<parseInt(currentdate))
            {
                setsetalert('Product Rent Over Please Recharge Call 8700800328')
                setPackageAlert(true)
            }
            else
            {
                setsetalert('System Activated')
                setPackageAlert(false)
                axios.get('http://localhost:5000/loginVerify')
                        .then((res) => {
                          // console.log(res.data,'res.data APP.JS USE EFFECT ');

                          let a=res.data.reverse();
                          let b=a.map((element)=>{ return element.jsonState})
                            setstate(b[0])

                            console.log(b[0],'bbbbb');
                            let aa=res.data.reverse()
                            // console.log(aa,'aa');
                            let bb=aa.map((element)=>{ return element.name}).reverse()         
                            
                            setLogin(bb[0])
                              
                            
                            

                            // console.log(bb,'aa[0]');
                            // setLogin(res.data.name,'=aa==')

                        })
                        .catch((err) => {
                          console.log(err);
                          
                        });
            }

        }).catch((err) => {
            console.log(err,'Activation. Error Useeffecg');
            
        });
    
    }, [])
    
  return (
    <>
       <header    className='noprint flex flex-col item-center justify-center '>

            <div className="row" style={{height:'0.2rem'}}>
                <div className="col-md-6 'btn rounded-0 btn-warning">
                <span className='bg-info btn rounded-0'>{Login}</span>
                <span onClick={Logout} className='btn rounded-0 btn-warning'>Logout</span></div>           
                <div className="col-md-6 text-end">{EXPIREDATE}</div>
            </div>
            <div>
                <h2 className='tracking-wide fs-1 font-bold text-center uppercase'>Genc India Invoices System</h2>
            </div>

            {/* <div className=''>
                <ul className='flex flex-row m-0 justify-end'>
                    <li onClick={handelprint} className='btn btn-print'>Print</li>
                    <li><input type="submit" value="Download" className='btn btn-download' /></li>
                    <li><input type="submit" value='Send' className='btn btn-send'  /></li>
                </ul>
            </div> */}
          
            
            
    <div className='btn btn-outline-danger w-100 text-white text-start'>
        <Link to='/' className="btn btn-outline-secondary rounded-0" >Home</Link>
        <Link to='/Dateaapp' className="btn btn-outline-secondary rounded-0" >Monthly Report</Link>   
        <Link to='/getdata' className="btn btn-outline-success rounded-0" >Report</Link>
        
    </div>
        </header>


        
    </>
  )
}
