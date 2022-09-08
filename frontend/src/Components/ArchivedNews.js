import React from "react";
import { useEffect, useState } from "react";

export default function ArchivedNews() {
  const [news, setNews] = useState([]);

  //Monto el componente y lo seteo con lo que recibo de la API
  useEffect(() => {
    fetch("http://localhost:3030/api/news/archived")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Función para modificar el campo deleteDate a 'true' al clickear el botón eliminar
  function deleteNew(id) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deleteDate: true }),
    };
    fetch("http://localhost:3030/api/news/" + id, requestOptions)
      .then((response) => response.json())
      .then((window.location.href = "/archived"))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="col-lg-6 p-5  mb-10 mx-auto">
      <div className="card shadow mb-4 ">
        <div className="card-header py-3 ">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            Archived News
          </h5>
        </div>
        <div className="card-body col-auto col-md-12">
          <div className="row ">
            <ul className="flex col-md-12">
              {" "}
              {news.map((product, i) => (
                <li className="list-group " key={i + product}>
                  <div className="card col-md-12 col-auto ">
                    <div className="card-header">{product.title}</div>
                    <div className="card-header">{product.description}</div>
                    <div className="card-body">{product.content}</div>
                    <div className="card-footer">{product.author}</div>
                    <div className="card-footer">Created: {product.date}</div>
                    <div className="card-footer">Archived: {product.date}</div>
                  </div>
                  <br></br>
                  <button
                    onClick={() => deleteNew(product._id)}
                    className="btn btn-dark btn-primary col-md-6 mx-auto"
                  >
                    Eliminar
                  </button>
                  <br></br>
                  <hr></hr>
                </li>
              ))}{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
