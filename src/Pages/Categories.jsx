import React, { useEffect ,useState } from 'react';
import Navbar from "./Navbar"
// import FetchData from './FetchData'

import axios from "axios"
import { Link } from 'react-router-dom';


const Categories = ({cat}) => {
  console.log(cat)
  const [Data, setData] = useState()
  const fetchData = async () =>{
    
     await axios
     .get(
      // console.log('https://newsapi.org/v2/top-headlines?country=in&category='+cat+'&apiKey=e4f3c91c5389492b9f5b714a878f86e0')
      cat ? 'https://newsapi.org/v2/top-headlines?country=in&category='+cat+'&apiKey=e4f3c91c5389492b9f5b714a878f86e0' :
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=e4f3c91c5389492b9f5b714a878f86e0'
     ).then((res) => setData(res.data.articles));
  };
  useEffect(() => {
      fetchData();
  }, [cat]);
  return (
    
    <div style={{minHeight:"150vh"}}>
      
        <Navbar/>
        <div className="container my-4 p-2" >
        <h1 className='d-flex justify-content-center align-items-center'><u>TOP HEADLINES</u></h1>
        <div className="container d-flex justify-content-center align-items-center flex-column my-4">
            {Data 
            ? Data.map((items,index)=>(
            <>
            <div className='container my-3 p-4' style={{width:"800px" ,boxShadow:"3px 3px 20px silver",borderRadius:"15px"}}> 
            <h4 className='my-2'>{items.title}</h4>
            <div className='d-flex justify-content-center align-items-center'>
                 <img src={items.urlToImage} alt="Loading.." className='img-fluid ' style={{width:"100%", height:"auto",objectFit:"cover"}} />
            </div>
            
            
            <p className='my-3'>{items.content}</p>
            <Link to={items.url} target="_blank" className='my-3 mb-4'>View More</Link>
            </div>
            </>)) 
            : "Loading"}
            </div>
      
    </div>
        
    </div>
  ) 
};

export default Categories ;
