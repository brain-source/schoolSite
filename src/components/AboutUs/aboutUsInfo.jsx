import React from 'react';
import s from '../Header/Header.module.css';
import {NavLink} from 'react-router-dom';
import img from '../../images/teachers.jpg';


const AboutUsInfo = (props) => {
	return (
		<div className={s.about_us_info_wrapper}>
			<div className={s.info}>
				<div className={s.title}>
					Педагогічний колектив
				</div>
				<div className={s.img}>
					<img src={img}/>
					**********************************
					**********************************
					**********************************
					</div>
			</div>
		</div>
		)
}

export default AboutUsInfo;