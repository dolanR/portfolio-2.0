import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index.jsx';
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
