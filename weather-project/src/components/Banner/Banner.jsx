import React, { useEffect } from "react";
import iconMobile from '../../svg/search-mobile.svg'
import iconTablet from '../../svg/search-tablet.svg'
import iconLaptop from '../../svg/search-laptop.svg'
import  Cards  from "../Cards/InfoCards";
const API_KEY = 'c899df01a007e998373f0576e8f261c7'

export const Banner = () => {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState(null);
  useEffect(() => {
    const savedWeather = localStorage.getItem("weatherData");
    if (savedWeather) {
      setWeather(JSON.parse(savedWeather));
    }
  }, []);
  const fetchWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
          .then((response) => response.json())
          .then((info) => {
              if (info) {
                setWeather(info);
                localStorage.setItem("weatherData", JSON.stringify(info)); 
                console.log(info)
              } else {
                  console.error("City data not found:", info);
              }
          })
          .catch((error) => console.error("Error fetching weather data:", error));
  };

    return (
      <>
        <div className="container-banner">
        <div className="banner-content">
          <h1 className="text-banner">Weather dashboard</h1>
         {/*mobile*/}
          <div className='container-element'>
          <div className="dash"></div>
          <div className='container-text-banner'>
          <p className="banner-subtitle">
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>
          <p className="banner-date">October 2023<br />Friday, 13th</p>
          </div>
          </div>
          {/*Tablet */}
          <div className='container-element-mobile'>
          <p className="banner-subtitle">
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>
          <div className="dash"></div>
          <div className='container-text-banner'>
          <p className="banner-date">October 2023<br />Friday, 13th</p>
          </div>
          </div>
          {/** */}
          <div className="banner-search">
            <input type="text" placeholder="Search location..."  className='banner-input'  value={city} onChange={(e) => setCity(e.target.value)}/>
            <button className="button-weather" onClick={fetchWeather}>
             <img src={iconMobile} alt="search-icon" className='icon-mobile'/>
             <img src={iconTablet} alt="search-icon" className='icon-tablet'/>
             <img src={iconLaptop} alt="search-icon" className='icon-laptop'/>
            </button>
          </div>
        </div>
        </div>
        {weather && <Cards weather={weather} />}
      </>
    )
}