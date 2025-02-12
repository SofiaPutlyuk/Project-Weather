import temperatureImage from '../../images/temperature.png'
import pressureImage from '../../images/pressure.png'
import windImage from '../../images/wind.png'
import visibilityImage from '../../images/visibility.png'
import humidityImage from '../../images/humidity.png'

const Section = ({ character }) => {
    const feelsLike = character?.list?.[0]?.main?.feels_like;
    const tempMin = character?.list?.[0]?.main?.temp_min;
    const tempMax = character?.list?.[0]?.main?.temp_max;
    const humidity = character?.list?.[0]?.main?.humidity;
    const pressure = character?.list?.[0]?.main?.pressure;
    const windSpeed = character?.list?.[0]?.wind?.speed;
    const visibility = character?.list?.[0]?.visibility;

    return (
        <div className="container-character">
            <div className="container-description">
                <p className='text-character'>Feels like</p>
                <p className='text-degree'>{feelsLike !== undefined ? `${feelsLike}°C` : '-'}</p>
                <img src={temperatureImage} alt="temperature" />
            </div>
            <div className='container-description'>
                <p className='text-character'>Min ℃</p>
                <p className='text-degree'>{tempMin !== undefined ? `${tempMin} °C` : '-'}</p>
                <p className='text-character'>Max ℃</p>
                <p className='text-degree'>{tempMax !== undefined ? `${tempMax} °C` : '-'}</p>
            </div>
            <div className='container-description'>
                <p className='text-character'>Humidity</p>
                <p className='text-degree'>{humidity !== undefined ? `${humidity} %` : '-'}</p>
                <img src={humidityImage} alt="humidity" />
            </div>
            <div className='container-description'>
                <p className='text-character'>Pressure</p>
                <p className='text-degree'>{pressure !== undefined ? `${pressure} Pa` : '-'}</p>
                <img src={pressureImage} alt="pressure" />
            </div>
            <div className='container-description'>
                <p className='text-character'>Wind speed</p>
                <p className='text-degree'>{windSpeed !== undefined ? `${windSpeed} m/s` : '-'}</p>
                <img src={windImage} alt="wind" />
            </div>
            <div className='container-description'>
                <p className='text-character'>Visibility</p>
                <p className='text-degree'>{visibility !== undefined ? visibility : '-'}</p>
                <img src={visibilityImage} alt="visibility" />
            </div>
        </div>
    )
}

export default Section;
