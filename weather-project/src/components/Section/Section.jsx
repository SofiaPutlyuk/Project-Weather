import temperatureImage from '../../images/temperature.png'
import pressureImage from '../../images/pressure.png'
import windImage from '../../images/wind.png'
import visibilityImage from '../../images/visibility.png'
import humidityImage from '../../images/humidity.png'
const Section = ({character}) => {
return(
    <div className="container-character">
        <div className="container-description">
        <p className='text-character'>Feels like</p>
        <p className='text-degree'>{character.list[0].main.feels_like}°C</p>
        <img src={temperatureImage} alt="temperature"/>
        </div>
        <div className='container-description'>
        <p className='text-character'>Min ℃</p>
        <p className='text-degree'>{character.list[0].main.temp_min} °C</p>
        <p className='text-character'>Max ℃</p>
        <p className='text-degree'>{character.list[0].main.temp_max} °C</p>
        </div>
        <div className='container-description'>
        <p className='text-character'>Humidity</p>
        <p className='text-degree'>{character.list[0].main.humidity} %</p>
        <img src={humidityImage} alt="humidity"/>
        </div>
        <div className='container-description'>
         <p className='text-character'>Pressure</p>
         <p className='text-degree'>{character.list[0].main.pressure} Pa</p>
         <img src={pressureImage} alt="pressure"/>
        </div>
        <div className='container-description'>
         <p className='text-character'>Wind speed</p>
         <p className='text-degree'>{character.list[0].wind.speed} m/s</p>
         <img src={windImage} alt="wind"/>
        </div>
        <div className='container-description'>
       <p className='text-character'>Visibility</p>
       <p className='text-degree'>{character.list[0].visibility}</p>
       <img src={visibilityImage} alt="visibility"/>
        </div>
  
    </div>
)
}
export default Section;