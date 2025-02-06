import './header'
import logo from '../../svg/logo.svg';
import arrow from '../../svg/arrow.svg';
import user from '../../svg/user.svg'
import logoDevice from '../../svg/logoDevice.svg'
import  Modal  from './Modal';
import { useState } from 'react';
export const Header = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => {
    setIsModalOpen(true); 
  };
  const closeModal = () => {
    setIsModalOpen(false); 
  };
return(
    <>
<header className='mobile-container'>
<img src={logo} alt="logo"/>
<p>Menu 
<img src={arrow} alt="arrow"/>
</p>
</header>
<header className='big-device-container'>
<nav>
    <ul className='info-container'>
    <img src={logoDevice} alt="logo"/>
    <li>Who we are</li>
    <li>Contacts</li>
    <li>Menu
    <img src={arrow} alt="arrow" className='arrow'/>
    </li>
    <button className="buttonSign" onClick={openModal}>Sign up</button>
    <img src={user} alt="user" />
    </ul>
</nav>
</header>
{isModalOpen && <Modal onClose={closeModal} />}
</>
)
}