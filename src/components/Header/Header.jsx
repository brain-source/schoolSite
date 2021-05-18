import React from 'react';
import s from './Header.module.css';
import {Route} from 'react-router-dom';
import AboutUs from '../AboutUs/aboutUs.jsx';
import {NavLink} from 'react-router-dom';
import News from '../News/News.jsx';



let Header = (props) => {
	return (
		<div className={s.header}>
			<div className={s.headerContainer}>
			<div className={s.mainLogo}>
				<div className={s.logo}></div>
			<NavLink to='/main'>
				<div className={s.schoolName}><p><strong>Снятинський ліцей</strong>
				</p><span>імені Василя Стефаника</span></div>
			</NavLink>
				</div>
				<div className={s.buttons}>
					<AboutUs />
			<NavLink to='/news'>
				<button className={s.news}>НОВИНИ</button>
			</NavLink>
				</div>
			</div>
		</div>
		)
}

export default Header;