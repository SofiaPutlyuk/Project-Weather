import logoMobile from '../../svg/icon-mobile-logo.svg'
import logoTablet from '../../svg/icon-tablet-logo.svg'
import logoLaptop from '../../svg/icon-laptop-logo.svg'
import instagramIcon from '../../svg/instagram.svg'
import facebookIcon from '../../svg/facebook.svg'
import whatsappIcon from '../../svg/whatsapp.svg'
export const Footer = () => {
    return (
        <footer>
            <div className='element-container'>
                <img src={logoMobile} alt="logo-mobile" className='logo-footer-mobile' />
                <img src={logoTablet} alt="logo-tablet" className='logo-footer-tablet' />
                <img src={logoLaptop} alt="logo-laptop" className='logo-footer-laptop' />
                <div className='footer-text'>
                    <p className='text-address'>Address</p>
                    <p className='text-address__street'>Svobody str. 35
                        Kyiv
                        Ukraine</p>
                </div>
            </div>
            <div>
                <p className="text-contact">Contact us</p>
                <div className='icon-container'>
                    <a href="https://www.instagram.com/openweathermap/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="icon-instagram" />
                    </a>
                    <a href="https://www.facebook.com/groups/270748973021342" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="icon-facebook" />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappIcon} alt="icon-whatsapp" />
                    </a>
                </div>
            </div>
        </footer>
    )
}