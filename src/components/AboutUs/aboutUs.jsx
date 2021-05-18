import React from 'react';
import s from '../Header/Header.module.css';
import {NavLink} from 'react-router-dom';


const AboutUs = (props) => {
	return (
		<div>
			<NavLink to={'/aboutUs'}>
			<button className={s.aboutUs}>ПРО НАС</button>
			</NavLink>
		</div>
		)
}

export default AboutUs;