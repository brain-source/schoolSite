import React from 'react';
import s from './InfoStudents.module.css';
import {NavLink} from 'react-router-dom';
import Call1 from './../../images/d0a01.jpg';
import Call2 from './../../images/d0a02.jpg';
import Call3 from './../../images/d0a03.jpg';




const InfoStudents = (props) => {
	return (
		<section className={s.InfoStudents}>
			<details className={s.details}>
				<summary className={s.summary}>
					Розклад уроків
				</summary>
				<div className={s.calls}>
					<img src={Call1} />
					<img src={Call2} />
					<img src={Call3} />
					</div>
			</details>
		</section>
		)
}

export default InfoStudents;