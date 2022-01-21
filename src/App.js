import Home from './components/Home'
import './index.css'
import Nav from './components/Nav'
import Code from './pages/Code'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='container'>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/code' element={<Code />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
