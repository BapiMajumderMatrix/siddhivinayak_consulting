import React from 'react'
import './loading.css'
const loading = () => {
	return (
		<div className='loading-container'>
			<div className='center'>

				<div className="loader">
					<svg viewBox="0 0 80 80">
						<circle id="test" cx="40" cy="40" r="32"></circle>
					</svg>
				</div>

				<div className="loader triangle">
					<svg viewBox="0 0 86 80">
						<polygon points="43 8 79 72 7 72"></polygon>
					</svg>
				</div>

				<div className="loader">
					<svg viewBox="0 0 80 80">
						<rect x="8" y="8" width="64" height="64"></rect>
					</svg>
				</div>

			</div>
		</div>
	)
}

export default loading
