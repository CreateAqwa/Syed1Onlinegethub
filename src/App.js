import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inno from './component/Inno';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import Getdata from './component/getdata/Getdata';
import OneData from './component/getdata/OneData';
import Pagenotfound from './component/PageNotFound/Pagenotfound';
import Dateaapp from './component/daterange/Dateaapp';


import PopupComponent from './component/Test area/PopupComponent';
import MainComponent from './component/Test area/MainComponent';
import PrintArea from './component/Test area/PrintArea';
import Popup from './component/Test area/Popup';
import Apps from './component/Test area/Apps';
import { useEffect, useState } from 'react';

import axios from 'axios';


import CryptoJS from 'crypto-js';
const SECRET_PASS ='XkhZG4fW2t2W';

var now = new Date()
var currentdate = now.getFullYear()+""+(parseInt(now.getMonth())+1)+""+now.getDate().toString().padStart(2, "0");


function App() {
  const [state, setstate] = useState()
  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const [userpass, setuserpass] = useState([])

  const [Login, setLogin] = useState('')
  const [name, setName] = useState()
  const [nameSendServer, setnameSendServer] = useState('')
  


// console.log(user,'user');
// console.log(pass,'pass');
// LOGIN SETUP--------------------
    
    let data={  user, pass,id:user,name}

    function AuthForm(e) {
      e.preventDefault();

        
        console.log(data.user,'data.user');

        setuserpass(data)

        let id=user
        axios.get("http://localhost:5000/Auth/"+id)
        .then((res) => {
          console.log(res.data,'res,data');
          setLogin(res.data.name)
        
          

          // console.log(res.data.id==data.user,'res.data.id==data.user');
          // console.log(res.data.pass==data.pass,'res.data.pass==data.pass');


          if (res.data.id===data.user & res.data.pass===data.pass){
              setLogin(user)
              
              console.log(nameSendServer,'nameSendServer');
              // setstate(true)
              console.log(user,'user---=====');
              // setLogin(user)
              // console.log(logincheck,'elif logincheck');
      
            //   // setlogingPage(true)
            let a={
              jsonState:true,
              todayDate:now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate().toString().padStart(2, "0"),
              todaytime: now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(),
              user,
              name:res.data.name,
              Loginbuton:'i am login'
            }
            axios.post('http://localhost:5000/loginVerify',a)
            .then((res) => {
                window.location.reload()
                console.log(res.data,'in check login');
            })
            .catch((err) => {
                console.log('refresh time error');
            });
      
              
             
          }
          else{
            setLogin("Invalid User & Password")
          }
          

        })
        .catch((err) => {
          // console.log(err.code,'err');
          if (err.code==='ERR_NETWORK')
                setLogin("Server Not Avilable")


          else if (err.code==='ERR_BAD_REQUEST')
            setLogin("User Password Invalid")
          
        });
      
    }

    
    const [alert, setsetalert] = useState('')
    const [PackageAlert, setPackageAlert] = useState(false)
const [EXPIREDATE, setEXPIREDATE] = useState('-=-')
    
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
                setsetalert('Product Rent Over Please Recharge')
                setPackageAlert(true)
            }
            else
            {
                setsetalert('System Activated')
                setPackageAlert(false)
                axios.get('http://localhost:5000/loginVerify')
                        .then((res) => {
                          // console.log(res.data,'res.data APP.JS USE EFFECT ');

                          let a=res.data.reverse()
                          let b=a.map((element)=>{ return element.jsonState })
                            setstate(b[0])


                            console.log(b[0],'bbbbb');
                            let aa=res.data.reverse()
                            // console.log(aa,'aa');
                            let bb=aa.map((element)=>{ return element.name}).reverse()         
                            
                            setLogin(bb[0])
                              
                            
                            

                            // console.log(bb,'aa[0]');
                            // setLogin(res.data.name,'=aa==')

                        }).catch((err) => {
                          console.log(err);
                          
                        });
            }

        }).catch((err) => {
            console.log(err,'Activation. Error Useeffecg');
            
        });
        
        
    },[getDaysInMonth])

    // LOGIN SETUP---END-----------------
    // LogingPage SETUP--------------------
    const [logingPage, setlogingPage] = useState(true)
    // const [name, setName] = useState()
    
    let coll={
      name,
      user,
      pass,
      id:user,
    }

    // console.log(coll,'coll');

    // LogingPage SETUP-------END-------------
    
    const getsignUPdata=(e)=>{
         e.preventDefault();
      axios.post("http://localhost:5000/Auth",coll)
      .then((res) => {
          // console.log(res.data,'res.data');
          
          setName('')
          setUser('')
          setPass('')
      }).catch((err) => {
        // console.log(err,'error');
        
      });
    }


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
      setLogin('')
    }

  
    const [Activationkey, setActivationkey] = useState('');
    
    const [StatusAlert, setStatusAlert] = useState('')
    let ActivateTime= now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    let ActivateDate=now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate().toString().padStart(2, "0");
    
    // const dataa= CryptoJS.AES.encrypt(
    //   JSON.stringify(Activationkey),
    //   SECRET_PASS
    // ).toString();
    // console.log(dataa,'dataa');

  
   
    
      
      
    var getDaysInMonth = function(month,year) {
      return new Date(year, month, 0).getDate();
     
     };

    const CheckForm=(e)=>{
      e.preventDefault();
                
      const bytes= CryptoJS.AES.decrypt(Activationkey,SECRET_PASS);    
      let aa=JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(aa,'aa'); 
      
      
                  aa=aa.split('-');
                  

                  // console.log(aa[1].split(""),'aaa111')
                  let expList=aa[1].split("");
                  
                  // setExpire()
                  let year =expList[0]+expList[1]+expList[2]+expList[3];
                  let month=expList[4]+expList[5];

                  console.log(month,'month');
                

        
      if (aa[0]=='Syed'+currentdate)
      {
          console.log('Same');
          setStatusAlert("Product Success Activted")

          let Acticationdata={
            Activationkey,
            ActivateTime,
            ActivateDate,
            Expire:parseInt(year)+""+parseInt(month)+""+getDaysInMonth(month,year).toString(),
            ExpireDate:getDaysInMonth(month,year).toString()+"-"+month+"-"+year,
            id:Activationkey
          }
                      console.log(Acticationdata,'Acticationdata');

            axios.post('http://localhost:5000/Activation',Acticationdata)
            .then((res) => {
                  console.log(res.data);
            }).catch((err) => {
              console.log(err);
            });
      }
      else{
          setStatusAlert('Invalid product Key')
        }
    }
    
  return (
    <>
    
    


    {PackageAlert ? 
        <>
        <form action="" method="post" onSubmit={CheckForm} className='mt-5'  align='center'>
                                ActivaionKey
                <div align='center'>
                <input type="text" onChange={(e)=> setActivationkey(e.target.value)}  name='Activationkey' className='form-control w-50' placeholder='Activatation Key' align="center" />
                </div>
                                                  <br />
                <input type="submit" className='w-50 rounded-0   bg-dark text-white' />
                                                  <br />
        </form>
        <center><h2>{StatusAlert}</h2></center>

        
        </> : 
        
        <>
        {state ? 
        

<>





<BrowserRouter>


    {/* <Headers/> */}
    <Routes>
        <Route element={<Inno/>} path='/'/>
    
        <Route  element={<PopupComponent/>} path='P' />
        <Route element={<MainComponent/>} path='M'/>


        <Route element={<Apps/>} path='Apps'/>
        <Route element={<Popup/>} path='Popup'/>


        <Route element={<PrintArea/>} path='PrintArea/:id'/>
        

        
        <Route element={<Getdata/>} path='getdata'/>

        <Route element={<OneData/>} path='onedata/:id'/>
        
        <Route element={<Dateaapp/>} path='Dateaapp'/>

        <Route element={<Pagenotfound/>} path='*'/>

    </Routes>
</BrowserRouter>
</>


 : 
 <>
        {/* <div className='bg-dark text-white p-4 text-center'>
           <input type="submit" value='Login' className='mb-2 btn bg-info text-dark w-25 ' onClick={()=>setLogingPage(false)}  /><br />
           <input type="submit" value='Signup' className='mb-2 btn bg-info text-dark w-25' onClick={()=>setsignup(true)}  />
        </div> */}
         
                   
         <div className="row">
         
            <div className="col-md-6 'rounded-0">
                <span className='bg-info btn rounded-0 '>{Login}</span>
                <span className='btn btn-warning rounded-0'>Last User Logout</span></div>
            <div className="col-md-6 text-end">{EXPIREDATE}</div>
         </div>

         
         
        
      {logingPage ?
      <>
      
      
      

          <span>
              <center className='h1' >Login</center>
          </span>
          <div align='right' className='justify-center pe-4'>
              <input type="submit" value='SignUp' className='mb-2 justify-end  btn bg-warning text-dark w-25' onClick={()=>setlogingPage(false)}  />
          </div>
      
        <form action="" method="post"  onSubmit={AuthForm}>
            <div align='center' className='bg-dark pt-4'>
                <div className="input-group mb-3 w-50">
                        <span className="input-group-text" id="basic-addon1">UserName</span>
                        <input type="text" className="form-control" placeholder="Username" name='user' onChange={(e)=>setUser(e.target.value)} />
                </div>
                    
                <div className="input-group mb-3 w-50">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                        <input type="text" className="form-control" placeholder="Password" name='pass' onChange={(e)=>setPass(e.target.value)} />
                </div>
                <div className='text-end w-50'>
                        <input type="submit" className='btn bg-info text-dark w-25 ' />
                        <br /><br />
                        
                </div>
            </div>
        </form>
        
        </> 
        
        :

        <>

        
        <h1><center>Signup</center></h1>
        
        <div align='right' className='justify-center pe-4'>
                        <input type="submit" value='Login' className='mb-2 btn bg-warning text-dark w-25' onClick={()=>setlogingPage(true)}  />
        </div>
        <form action="" method="post" onSubmit={getsignUPdata}>
            <div align='center' width='50' className='bg-dark pt-4 '>
                <div className="input-group mb-3 w-50">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                        <input type="text" className="form-control" placeholder="Name" name='name' onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="input-group mb-3 w-50">
                        <span className="input-group-text" id="basic-addon1">UserName</span>
                        <input type="text" className="form-control" placeholder="Username" name='user' onChange={(e)=>setUser(e.target.value)} />
                </div>
                    
                <div className="input-group mb-3 w-50">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                        <input type="text" className="form-control" placeholder="Password" name='pass' onChange={(e)=>setPass(e.target.value)} />
                </div>
                {/* <div className='text-end'>
                        <input type="submit" className='btn bg-info text-dark w-25 ' onClick={getsignUPdata} />
                </div> */}
                <div className='text-end w-50'>
                        <input type="submit" className='btn bg-info text-dark w-25 '  />
                        {/* <br /><br /> */}
                </div>
                
            </div>
        </form>
        
        
        </>
  }
  
    
    
 </>
 
 }
  

        </> 
        
        }
    
    





{/* <div className="App " >
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <header className="App-header" style={{height:'25px'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </>
  );
}

export default App;
