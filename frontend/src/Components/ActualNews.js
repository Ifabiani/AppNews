import React from 'react'
import { useEffect} from 'react';


export default function ActualNews() {

  useEffect(() => {
    fetch('http://localhost:3001/api/news', {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {console.log(error);})
  },[])

  return(
    <div>
    Hola Mundo
    </div>
  )
}
