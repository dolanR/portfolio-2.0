import './index.css';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/dr-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<>
			<div className='nav-bar'>
				<nav>
					<NavLink exact='true' className='home' to='/'>
						<FontAwesomeIcon icon={faHome} size='2x' />
					</NavLink>
					<NavLink exact='true' className='about' to='/about'>
						<FontAwesomeIcon icon={faUser} size='2x' />
					</NavLink>
					<div className='nav-link' to='/'>
						<Logo className='logo' />
					</div>
					<NavLink exact='true' className='work' to='/work'>
						<FontAwesomeIcon icon={faBriefcase} size='2x' />
					</NavLink>
					<NavLink exact='true' className='contact' to='/contact'>
						<FontAwesomeIcon icon={faEnvelope} size='2x' />
					</NavLink>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
