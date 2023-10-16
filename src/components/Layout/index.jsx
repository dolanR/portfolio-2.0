import Navbar from "../Navbar/index.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className='app'>
			<Navbar />
			<div className='page'>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
