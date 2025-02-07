import iconMobile from '../../svg/search-mobile.svg'
import iconTablet from '../../svg/search-tablet.svg'
import iconLaptop from '../../svg/search-laptop.svg'
export const Banner = () => {
    return (
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
            <input type="text" placeholder="Search location..."  className='banner-input'/>
            <button className="button-weather">
             <img src={iconMobile} alt="search-icon" className='icon-mobile'/>
             <img src={iconTablet} alt="search-icon" className='icon-tablet'/>
             <img src={iconLaptop} alt="search-icon" className='icon-laptop'/>
            </button>
          </div>
        </div>
      </div>
    )
}