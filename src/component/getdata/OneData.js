import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const OneData = () => {
    const useparams=useParams()
    console.log(useparams.id);

    useEffect(() => {
        return () => {
            axios.get('http://localhost:5000/posts/'+useparams.id)
            .then((res) => {
                console.log(res.data);
                setonedatapage(res.data)
            }).catch((err) => {
                console.log(err);
            });
        };
    },[])
    const [onedatapage, setonedatapage] = useState({})
  return (
    <>ONE DATA

        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Amount</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* {onedatapage.map(({ id,item,quantity,price,amount})=>(
        // use this=> import React, { useEffect } from "react" 
                        <React.Fragment key={id}>
                            <td width="190px">{item}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td className="amount" >{amount}</td>
                            <td><button  className="btn btn-danger">Delete</button>  &nbsp;
                                <button className="btn btn-success" >Update</button></td>
                        </React.Fragment>
                    ))} */}
                </tr>
            </tbody>
        </table>
    {/* <div class="card">
        <div class="card-body">
            <h5 class="card-title">{onedatapage.id}</h5>
            <p class="card-text">{onedatapage.list}</p>
        </div>
    </div> */}

    </>
  )
}

export default OneData