import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./navstyle.css"
import Teams from './teams';
import Teaminfo from './teaminfo';
import { useNavigate } from 'react-router-dom';
import Auctioner from './auctioner ';

const Navbar = () => {
  const viewer=()=>{
document.getElementsByClassName("oy")[0].style.display="none";
  }

  const  team=[
    {Name:"CHENNAI SUPER KINGS", logo:"./csk.JPEG" },
    {Name:"MUMBAI INDIANS", logo:"./kkr.webp"},
    {Name:"srh", logo:"./srh.webp"},
    {Name:"gt", logo:"./gt.jpeg"},
    {Name:"kxps", logo:"./kxps.jpeg"},
    {Name:"lsg", logo:"./lsg.jpeg"},
    {Name:"mi", logo:"./mi.jpeg"},
    {Name:"mi", logo:"./royalcb.jpeg"},
    {Name:"rr", logo:"./rr.jpeg"},
    {Name:"dc", logo:"./dc.jpeg"},



  ]
  const navigate=useNavigate();
  const onhandleteam=(Name)=>{

    navigate(`/${Name.toLowerCase()}`); 
  }
  const data=[
    {Name:"CHENNAI SUPER KINGS", psd:"4",fpys:"1",purserem:"23.4",color:"warning"},
    {Name:"MUMBAI INDIANS", psd:"4",fpys:"1",purserem:"23.4",color:"info"},
    
    {Name:"ROYAL CHALLENGER BENGALORE", psd:"4",fpys:"1",purserem:"23.4",color:"danger"},
    {Name:"KOKLATA KNIGHT RIDERS", psd:"4",fpys:"1",purserem:"23.4",color:"success"},
    {Name:"SUNRISES HYDERBAD", psd:"4",fpys:"1",purserem:"23.4",color:"sucess"},
    {Name:"DELHI CAPTIALS", psd:"4",fpys:"1",purserem:"23.4" ,color:"info"},
   
    {Name:"RAJISTHAN ROYALS", psd:"4",fpys:"1",purserem:"23.4",color:"danger"},
 
    {Name:"PUNJAB KINGS", psd:"4",fpys:"1",purserem:"23.4",color:"sucess"},
    {Name:"GUJARATH GAINTS", psd:"4",fpys:"1",purserem:"23.4",color:"info"},
    {Name:"LUCKNOW SUPER GAINTS", psd:"4",fpys:"1",purserem:"23.4",color:"warning"},
   
  ]
  return (
  <>

      <ul  className="nav justify-content-end   text-light container-fluid ">
      <img src="./logo.jpg"  alt={ 'cava'}  className='img1'></img>
      <li className="nav-item   active m-3"> <a className="active nav-link" href="#"> Home</a></li>
      <li className="nav-item m-3"><a className="nav-link" href="#">About</a></li>
      <li className="nav-item m-3"><a className=" nav-link" onClick={() => { onhandleteam("acutioner"); }}>auctioner login</a></li>
      <li className="nav-item m-3"><a className=" nav-link" onClick={()=>{onhandleteam("ownerlogin")}}>Team owner login</a></li>
      <li className="nav-item m-3"><a className=" nav-link" href="#">How it works</a></li>
      <li className="nav-item m-3"><a className=" nav-link" href="#">contact us
        </a>
      </li>
      </ul>
     
<div className=" oy cotainer-fluid mt-2  ml-2 text-dark  "  style={{height:"30vh",backgroundColor:"gray"}}> 

<ul className='     text-light text-center container-fluid  pt-3'> 
 <li className='h2'> Welcome to the IPL Auction Platform!</li>

<li className='h6 '>Where dreams meets pitch. Watch live updates or participate as owner or auctioner</li>

<li className='btn btn-light m-4' onClick={() => { onhandleteam("auctioner "); }}> login as auctioner</li>
<li  className='btn btn-info m-4'  onClick={() => { onhandleteam("ownerlogin"); }}>Login as Owner</li>
<li className='btn btn-light  m-4' onClick={viewer}>  viewer</li>
</ul>
</div>
<div className='row'>
<div class="shadow-l  p-1 pb-3  col-sm-5 text-start  m-3  border ">
    
    <img src="./test.jpeg"  alt={ 'cava'} className=' img-round mx-auto d-block '></img>
  
    <ul type="none" className='text-start mt-3 ' >
    <li className='btn btn-danger m-1'>Name</li>-
  <li className='btn btn-dark disabled m-3'>
  VIRAT KOHIL
  </li>
 
  <li className='btn btn-danger m-2'>IPL-2024</li>-
  <li className='btn btn-dark disabled m-3'> 
  RCB
  </li><br/>
  <li className='btn btn-danger m-1'>Category</li>-
  <li className='btn btn-dark disabled m-2'>
  RH Batsman
  </li>  <li className='btn btn-danger m-1'>strike Rate</li>-
  <li className='btn btn-dark disabled m-1'>
  50.6
  </li>
  <br/>
  
 
  <li className='btn btn-danger m-1'>country</li>-
  <li className='btn btn-dark disabled m-2'> 
 India
  </li>
  <li className='btn btn-danger m-1'>Base price</li> -
  <li className='btn btn-dark disabled m-2'>
  50.6
  </li> <li className='btn btn-dark  m-2'>
  crores
  <br/>
  
 
  </li><br/><div className='bg-dark rounded text-center text-light'>
  <li className='btn btn-danger  m-1'>current price </li> -
  <li className='btn btn-dark m-2'>
 0
  </li> <li className='btn btn-info disabled m-2'>
  crores
  </li>

  <li className='btn btn-warning  m-2'>
 CSK
  </li>
  <li className='btn btn-warning  m-2'>
 <img src="./csk.JPEG"  alt={ 'cava'}  style={{height:"30px",width:"30px"}} />
  </li>
  </div>
  
    </ul>
    </div>


    <div className="table-container  table-striped col-sm-6 m-4">
    <table className="table " style={{ width: "100%" }}>
            <thead>
                <tr className='table-dark'>
                    <th>Team</th>
                    <th>players</th>
                    <th>foregin players</th>
                    <th>purse rem</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data, index) => (
                  <tr key={index} className={`table-${data.color}  `}>

               
                        <td >{data.Name}</td>
                        <td>{data.psd}</td>
                        <td>{data.fpys}</td>
                        <td>{data.purserem}</td>
                    </tr>
                ))}
            </tbody>
            </table>
    </div>
</div>

<Teaminfo height="40vh" width="30%"/>

        <div className=" oy cotainer-fluid mt-2  ml-2 text-dark  text-center "  style={{height:"30vh",backgroundColor:"lightgray"}}>        
             <ul type="none" className='p-5' >
<li className='h3'>players status </li>
<li className='btn m-3 btn-info'> sold players</li>
<li className='btn m-3 btn-info'> upcomig players</li>
<li className='btn  m-3 btn-info'> unsold players</li>
</ul>

        </div> 
        


        <div className=" oy cotainer-fluid  ml-2 text-white row  "  style={{height:"40vh",backgroundColor:"gray"}}>   


      <ul  TYPE="NONE" className='p-5  hello col-sm-3 '>
      <li className='h2 pt-2 link '>IPL Auction</li>
      <li><a href='#'>Home </a> </li>
      <li><a href='#'>About us </a> </li>
      <li><a href='#'>Team owner login </a> </li>
      <li><a href='#'>Auctioner login </a> </li>
      <li><a href='#'>Contact us </a> </li>
     
      </ul>  

      <ul  TYPE="NONE" className='p-5  mt-4 col-sm-3 hello '>

      <li><a onClick={()=>{onhandleteam("csk")}}>Chennai super kings </a> </li>
      <li><a onClick={()=>{onhandleteam("mi")}}>Mumbai Indians </a> </li>
      <li><a onClick={()=>{onhandleteam("rcb")}}>Royal CHALLENGER bangalore</a> </li>
      <li><a onClick={()=>{onhandleteam("kkr")}}>kolkata knight riders   </a> </li>
      <li><a onClick={()=>{onhandleteam("srh")}}>Sunrises Hyderbad </a> </li>
     
      </ul>  
      
      <ul  TYPE="NONE" className='p-5  mt-4 col-sm-3 hello cursor-hand '>
      <li>        </li>
      <li><a onClick={()=>{onhandleteam("gt")}}>Gujarath Taitans </a> </li>
      <li><a onClick={()=>{onhandleteam("lsg")}}>Lucknow super gaints </a> </li>
      <li><a onClick={()=>{onhandleteam("dc")}}>Delhi Captials</a> </li>
      <li><a onClick={()=>{onhandleteam("pbks")}}>Punjab kings  </a> </li>
      <li><a onClick={()=>{onhandleteam("rr")}}>Rajisthan Royal</a> </li>
     
      </ul> 

      <div className=" col-sm-3  p-0 mt-5">
      <button className="btn">
        <i className="bi bi-google"></i>
      </button>
      <button className="btn">
        <i className="bi bi-facebook"></i>
      </button>
      <button className="btn">
        <i className="bi bi-twitter"></i>
      </button>
      <button className="btn">
        <i className="bi bi-instagram"></i>
      </button> <button className="btn">
        <i className="bi bi-linkedin"></i>
      </button>
    </div>
       </div>
    </>


        
     ) };

export default Navbar;
