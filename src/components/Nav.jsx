import { Link } from 'react-router-dom'

function Nav() {
	return (
		<>
			<nav className='navbar'>
				<Link to={'/'}>
					<h2>Team 29</h2>
				</Link>
				<ul>
					<li>
						<a href={'#'}> Watch Stream </a>
					</li>
					<li>
						<Link to={'/code'}> Code </Link>
					</li>
					<li>
						<a href={'#'}> Flagged </a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
