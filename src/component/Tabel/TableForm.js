import { hover } from "@testing-library/user-event/dist/hover";
import axios from "axios";
import React, { useEffect } from "react"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TableForm({item,setitem,price,setprice,quantity,setquantity,amount,setamount,list,setlist,total,settotal}) {
  const handleSubmit=(e)=>{
    e.preventDefault();
    //  Coloum  Blank Is Not Allow
    if (!item || !quantity || !price) {
      alert(`Fill  Items , Quantity , Price`)
    }
    //  Coloum  Blank Is Not Allow
    else{
      const newitems ={
        id:uuidv4(),
        item,
        quantity,
        price,
        amount,
      }
      setlist([...list,newitems])
      console.log(list,'list in side tableform ');
      setisediting(false)
    }
}
  
  useEffect(() => {
    const calculateamount=(amount)=>{
      setamount(quantity*price)
    };
    calculateamount(amount)
  },[price,quantity,amount,total,settotal])
    console.log(list,'list in side tableform 2 ');

  const deleteRow=(id)=>{
    console.log(id);
    setlist(list.filter((row)=> row.id !==id))
    settotal(0)
    }
  // const deleteRow=(id)=>setlist(list.filter((row)=> row.id !==id))

//Update Data ======================
  const [isediting, setisediting] = useState(false);
  const editRow=(id)=>{
    console.log(id);
    const editingRow= list.find((row)=> row.id === id)
      // deleteRow(id)
      setlist(list.filter((row)=> row.id !==id)) 
      setisediting(true)
      setitem(editingRow.item)
      setquantity(editingRow.quantity)
      setprice(editingRow.price)
      settotal(0)
      setamount(0)
      
  }
//Update Data ======================


// Grand Total====start===============
useEffect(() => {

  
    let rows=document.querySelectorAll(".amount")
    let sum=0
    
    for (let i = 0; i<rows.length;i++){
      if (rows[i].className === "amount")
      {
          sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
          settotal(sum)
      }
      // console.log(total,'tototototo')
    }
    // console.log(document.getElementById("quantity"),'document.getElementById("quantity")');
    
})
// Grand Total=====end==============


const clearlisttotal=()=>{

  setlist([])
  settotal(0)
  setitem('')
  setquantity(1)
  setprice('')
  }



  return (
   <><br /><br />
<form onSubmit={handleSubmit}>
    <div className="input-group mt-3 mb-2">
      <label htmlFor="item" className="input-group-text">Item Description</label>
      <input type="text" name="item" id="item" value={item} onChange={(e)=> setitem(e.target.value)} className="form-control" required/>
    </div>

    <div className="input-group mb-2">
      <label htmlFor="price" className="input-group-text" style={{height:"2.4rem"}}>Price</label>
      <input type="number" name="price" id="price" value={price} onChange={(e)=> setprice(e.target.value)} min="1" className="form-control" style={{height:"2.4rem"}} required/>

      <label htmlFor="quantity" className="input-group-text">Quantity</label>
      <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e)=> setquantity(e.target.value)} min="1" className="form-control" required />
    </div>

    <div align='right'>

    <div className="input-group mb-2 w-50 ">
        <label htmlFor="Amount" className="input-group-text bg-outline-info w-100 amount" >Total Amount: &ensp; {amount ? amount : 0  } </label>
    </div>

    </div>

    <button align='' type="submit" className="btn btn-info mb-2 w-100">{isediting ? "Update": "Add More"} </button>
</form>
<button className="btn btn-dark rounded-0 justify-end" onClick={clearlisttotal} >Clear Data</button>
<div className="text-end table bg-white h2">Total Amount: {total.toLocaleString()}</div>

<table  className="table mt-3">
  <thead align='center' className="bg-dark text-white">
   <tr>
      <th>Item</th>
      <th>Qty</th>
      <th>Price</th>
      <th>Amount</th>
      <th></th>
   </tr>
  </thead>
  <tbody align='center'>
  {list.map(({ id,item,quantity,price,amount})=>(
    // use this=> import React, { useEffect } from "react" 
    <React.Fragment key={id}>
      <tr> 
        <td width="190px">{item}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td className="amount" >{amount}</td>
        <td><button onClick={()=>deleteRow(id)} className="btn btn-danger">Delete</button>  &nbsp;
            <button className="btn btn-success" onClick={()=>editRow(id)}>Update</button></td>
      </tr>
    </React.Fragment>
      ))}
  </tbody>
  
</table>

{/* <button  onClick={save} className="btn bg-info">Save</button> */}
   </>
  )
}
