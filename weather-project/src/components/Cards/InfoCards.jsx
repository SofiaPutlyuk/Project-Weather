import iconRefresh from '../../svg/refresh.svg'
import iconHeart from '../../svg/heart.svg'
import iconDelete from '../../svg/delete.svg'
const InfoCards = ({weather}) => {
    const iconCode = weather.list[0].weather[0].icon; 
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const getTimeInfo  = new Date()
    const getHour = `${getTimeInfo.getHours()}:${getTimeInfo.getMinutes()}`
    const getData = `${getTimeInfo.getDate()}.${getTimeInfo.getMonth()}.${getTimeInfo.getFullYear()}`
    const getDay = getTimeInfo.toLocaleDateString("en-US", { weekday: "long" });
    const getTemperature = weather.list[0].main.temp
    return(
        <div className="container-card">
        <div className='location-container'>
        <p className="text-city">{weather.city.name}</p>
        <p className="text-city__country">{weather.city.country}</p>
        </div>
        <div className='container-info'>
        <p className='text-hour'>{getHour}</p>
        <div className='container-data'>
            <button className='hourly-button'>Hourly forecast</button>
            <button className='weekly-button'>Weekly forecast</button>
        </div>
        <div className='container-data'>
            <p className='text-data'>{getData}</p>
            <div className='dash-card'></div>
            <p className='text-data'>{getDay}</p>
        </div>
        <img src={iconUrl} alt="Weather Icon" className='icon-weather'/>
        <p className='text-degree'>{getTemperature}°C</p>
        <div className='container-data'>
            <img src={iconRefresh} alt="refresh-icon"/>
            <img src={iconHeart} alt="heart-icon"/>
            <button className='button-more'>See more</button>
            <img src={iconDelete} alt="delete-icon"/>

        </div>
        </div>
        </div>
    )
}
export default InfoCards;