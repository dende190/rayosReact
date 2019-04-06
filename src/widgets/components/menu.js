import React, { Fragment } from 'react'
import './menu.css'

const Menu = props => (
	<Fragment>
		<input className="InputHamburger" id="navbar" type='checkbox' />
	    <label htmlFor="navbar" className="LabelHamburger">
	        <div className='menu'>
	            <span className='hamburger'></span>
	        </div>
	    </label>

	    <ul className="ListMenu">
	        <li className="ListHrefMenu"><a className="HrefMenu" href='#'>Home</a></li>
	        <li className="ListHrefMenu"><a className="HrefMenu" href='#'>About</a></li>
	        <li className="ListHrefMenu"><a className="HrefMenu" href='#'>Work</a></li>
	    </ul>	 
	</Fragment>
)

export default Menu