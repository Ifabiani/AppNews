import React from 'react'
import { useEffect, useState} from 'react';


export default function ArchivedNews() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/news/archived')
    .then(response => response.json())
    .then(data => {setNews(data)})
    .catch(error => {console.log(error);})
    
  },[])


  console.log(news)

  return (
    <div className="col-lg-6 p-5  mb-10 ">
      <div className="card shadow mb-4 ">
        <div className="card-header py-3 ">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            Archived News
          </h5>
        </div>
        <div className="card-body col-auto col-md-12">
          <div className="row ">
          <ul className="flex col-md-12"> { news.map( (producto, i) => <li className='list-group '  key={i + producto}>
          <div className="card col-md-12 col-auto ">
      <div className="card-header ">{producto.title}</div>
      <div className="card-header">{producto.description}</div>
      <div className="card-body">{producto.content}</div>
      <div className="card-footer">{producto.author}</div>
      <div className="card-footer">{producto.date}</div>
      </div>
      <button className='btn btn-primary col-md-6'>Eliminar</button>
      <br></br>
      
      </li> 
      
      ) } </ul>
          
            
          </div>
        </div>
      </div>
    </div>
  )
}