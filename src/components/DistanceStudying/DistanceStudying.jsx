import React from 'react';
import s from '../DistanceStudying/DistanceStudying.module.css';
import distance from '../../images/distance.jpg';

let DistanceStudyingSection = (props) => {
	return (
		<section className={s.section}>
			<div className={s.container}>
			<div className={s.image}>
			<img src={distance} alt="" />
			</div>
			<div className={s.text}>
				Дистанційна форма навчання в Снятинському ліцеї
				 імені Василя Стефаника
				  проводиться з використанням технологій
				   дистанційного навчання під
				    час організації здобуття
				     освіти за різними формами
				      в закладах освіти, які
				       забезпечують здобуття повної загальної
				        середньої освіти,
				         зокрема на електронній освітній платформі Google Клас.
			</div>
				</div>
			</section>
		)
}

export default DistanceStudyingSection;