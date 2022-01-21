import image from '../images/social-distancing.png'
import { Link } from 'react-router-dom'
import Team from './Team'

function Home() {
	return (
		<>
			<main className='along-side'>
				<div className='left'>
					<h2>Crowd Monitoring system for COVID-19 & beyond!</h2>
					<p>In person invigilation is not always possible.</p>

					<Link to={'/code'}>Code</Link>
				</div>

				<div className='right'>
					<img src={image} alt='' />
				</div>
			</main>

			<div className='team'>
				<Team />
			</div>
		</>
	)
}

export default Home
