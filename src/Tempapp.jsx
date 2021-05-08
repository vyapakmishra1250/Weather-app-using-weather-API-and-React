import React, { useEffect, useState } from 'react';
import './index.css';

const Tempapp = () =>{

    const [city, setCity] = useState();
    const [search, setSearch] = useState();

    useEffect(() =>{
        const fetchApi = async() =>{
             const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9bec577ec8ddda72184625252fd148ad `;
             const response =await fetch(url);
             const resJson = await response.json();
             setCity(resJson.main);
        }

        fetchApi();
    },[search]);

    return(<>
        <div className="box">
            <div className="inputData">
                <input
                type="search" 
                className="inputField"
                onChange={(event)=>{
                     setSearch(event.target.value)
                }}
                />
                </div>
        {!city ?(
            <p className="error_msg">No data found</p>
        ) : (<div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
            {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max">Min: {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        )}
    
     </div>
    </>);
};

export default Tempapp;