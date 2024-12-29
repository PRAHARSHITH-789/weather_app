import React, { useState } from "react";
import "./App.css";
import data from "./indian_weather_data.json";

export default function App() {
  const [info, setInfo] = useState(data);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = data.filter((item) =>
      item.city.toLowerCase().includes(search.toLowerCase())
    );
    setInfo(filteredData);
  };

  return (
    <>
      <div className="h-50 w-100 d-flex p-3 shadow align-items-center">
        <div className="mr-4 d-flex align-items-center">
          <img src="./pleasant.jpeg" style={{ width: "50px", height: "50px" }} alt="Logo" />
          <h1 className="ml-3">Weather Dashboard</h1>
        </div>
        <form className="d-flex text-center" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter the city"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit " className="btn btn-info m-2">Search</button>
        </form>
      </div>

      <div className="container-fluid shadow row mt-3" style={{ width: "50%", margin: "auto" }}>
        {search && (
          info.length > 0 ? (
            info.map((item, index) => (
              <div key={index} className="col-sm-12 d-flex p-3 border-bottom">
                <div className="col-sm-4">
                  <img
src={item.condition ? `/${item.condition}.jpeg` : "/logo.jpeg"}
width="100%"
                    
                  />
                </div>
                <div className="col-sm-8">
                  <ul className="list-unstyled">
                    <li style={{ fontSize: "20px" }}>
                      <i className="fa fa-thermometer-half m-1"></i>{item.temperature}°C
                    </li>
                    <li>
                      <i className="fa fa-map-marker m-1"></i>{item.city}
                    </li>
                    <li>
                      <i className="fa fa-clock-o m-1"></i>{new Date().toLocaleTimeString()}
                    </li>
                    <li>
                      <i className="fa fa-cloud m-1"></i>{item.condition}
                    </li>
                    <li>
                      <i className="fa fa-comment m-1"></i>{item.message}
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-12 pt-5">No data found for the entered city.</div>
          )
        )}
      </div>
    </>
  );
}
