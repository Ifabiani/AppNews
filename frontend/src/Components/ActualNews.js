import React, { useEffect, useState} from 'react';


export default function ActualNews() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/news')
    .then(response => response.json())
    .then(data => {setNews(data)})
    .catch(error => {console.log(error);})
    
  },[])


  function archiveNew(id){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archivedDate: Date.now() })
    };
    fetch('http://localhost:3030/api/news/'+id, requestOptions)
        .then(response => response.json())
        .then(window.location.href = '/')  
  }

  

  return (
    <div className="col-lg-6 p-5  mb-10 mx-auto ">
      <div className="card shadow mb-4 ">
        <div className="card-header py-3 ">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            News
          </h5>
        </div>
        <div className="card-body col-auto col-md-12 container">
          <div className="row">
          <ul className="flex col-md-12"> { news.map( (product, i) => <li className='list-group '  key={i + product}>
          <div className="card col-md-12 col-auto">
      <div className="card-header">{product.title}</div>
      <div className="card-header">{product.description}</div>
      <div className="card-body">{product.content}</div>
      <div className="card-footer">{product.author}</div>
      <div className="card-footer">{product.date}</div>
      </div>
      <br></br>
      <button onClick={()=> archiveNew(product._id)} className='btn btn-dark col-md-6 mx-auto'>Archivar</button>
      <br></br>
      <hr></hr>
      </li> 
      ) } </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
