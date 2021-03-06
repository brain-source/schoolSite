import React from 'react';
import s from '../News/News.module.css';

const News = (props) => {
	return (
	<div className={s.news_container}>
		<div className={s.title}>Новини – оголошення</div>
		<div className={s.stars}>*********************************</div>
		<p>Шановні учасники освітнього процесу,</p>

		адміністрація Снятинського ліцею імені Василя Стефаника повідомляє, що

		відповідно до протоколу №9 позачергового засідання регіональної комісії з питань техногенно-екологічної безпеки і надзвичайних ситуацій від 9 квітня 2021 року,  відновлюється освітній процес у закладах загальної середньої освіти (5-11 класи) та позашкільної освіти з 12 квітня 2021р.

		<div className={s.stars}>*********************************</div>
		<p>Шановні учасники освітнього процесу,</p>

адміністрація Снятинського ліцею імені Василя Стефаника повідомляє, що

відповідно до листа відділу освіти, молодіжної політики та спорту Снятинської міської ради 01.04.2021р. № 187/01-15/13 та відповідно до протоколу №6 позачергового засідання Снятинської міської комісії з питань техногенно-екологічної безпеки і надзвичайних ситуацій від 28 березня 2021 року
		<div className={s.red}>буде відновлено освітній процес в 1-4 класах закладів загальної
		 середньої освіти з 05 квітня 2021р.</div>
		 Також повідомляємо про
		 <div className={s.red}>продовження організації освітнього процесу у ліцеї з використанням технологій дистанційного навчання для 5-12 класів.</div>
		 Навчання відбувається за звичайним розкладом уроків з 09.00.

			Посилання на онлайн-заняття та навчальні матеріали розміщені у Google classroom.
		<div className={s.stars}>*********************************</div>


	</div>
		)
}

export default News;