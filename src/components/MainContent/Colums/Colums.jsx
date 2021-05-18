import React from 'react';
import s from '../Colums/Colums.module.css';
import news1 from '../../../images/news.jpg';
import news2 from '../../../images/news2.jpg';
import news3 from '../../../images/news3.jpg';
import news4 from '../../../images/news4.jpg';
import {NavLink} from 'react-router-dom';

let Colums = (props) => {
	return (
		<div className={s.container}>
		<div className={s.colums}>
		<div className={s.columnInner}>
			<NavLink to='/metodicalWorks'>	
			<li>МЕТОДИЧНА РОБОТА</li>
			</NavLink>
			<NavLink to='/inclusiveStudy'>
			<li>ІНКЛЮЗИВНЕ НАВЧАННЯ</li>
			</NavLink>
			<NavLink to='/work'>
			<li>ВИХОВНА РОБОТА</li>
			</NavLink>
			<NavLink to='/newsAdvertisment'>
			<li>НОВИНИ - ОГОЛОШЕННЯ</li>
			</NavLink>
			<NavLink to='/pcychological'>
			<li>ПСИХОЛОГІЧНИЙ СУПРОВІД НВП</li>
			</NavLink>
			<NavLink to='/lyceumPatron'>
			<li>МЕЦЕНАТИ ЛІЦЕЮ</li>
			</NavLink>
			<NavLink to='/graduates'>
			<li>НАШІ ВИПУСНИКИ - НАША ГОРДІСТЬ</li>
			</NavLink>
			<NavLink to='/study'>
			<li>ФОРМИ ЗДОБУТТЯ ОСВІТИ</li>
			</NavLink>
			<NavLink to='/booling'>
			<li>БУЛІНГ</li>
			</NavLink>
		</div>
		<div className={s.columnBlocks}>
			<div className={s.title}><h1>Шкільне життя</h1></div>
				<div className={s.top}>
			<div className={s.block}>
				<img className={s.image} src={news1} />
			</div>
			<div className={s.block}>
			<img className={s.image} src={news2} /></div>
				</div>
				<div className={s.bottom}>
			<div className={s.block}>
					<img className={s.image} src={news3} />
			</div>
			<div className={s.block}>
					<img className={s.image} src={news4} />
			</div>
				</div>
		</div>
	</div>
</div>
	)
}

export default Colums;
