import './index.css'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/dr-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
return (
    <> 
        <div className='nav-bar'>
            <Link className='nav-link' to='/'>
              <Logo className='logo'/>
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' className='home icon' to='/'>
                    <FontAwesomeIcon icon={faHome} size='2x'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about icon' to='/about'>
                    <FontAwesomeIcon icon={faUser} size='2x'/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact icon' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                </NavLink>
            </nav>
        </div>
    </>
)}

export default Sidebar