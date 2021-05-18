import React from 'react';
import s from '../MainContent/MainContent.module.css';
import '../Popup/Popup.css';
import Colums from '../MainContent/Colums/Colums.jsx';
import SliderMainImages from '../MainImage/MainImage.jsx';
import {NavLink} from 'react-router-dom';
import book from '../../images/book.jpg';



class MainContent extends React.Component {
	render() {
		return (
		<div>
		<section className={s.topLists}>
			<div>
			<NavLink to='/main'>
			<li id={s.top}>Головна</li>
			</NavLink>
			</div>
		<div>
			<a href="#popup" id={s.top} className={s.popup}><li>Виховна робота</li></a>
		</div>
		<div>
			<li  id={s.top}>Дистанційне навчання</li>
			</div>
			<div>
			<li id={s.top}>Зв'язок</li>
			</div>
		</section>
			<SliderMainImages />
			<section className={s.block}>
				<div className={s.container}>
				<div className={s.nowadays}>
					<div className={s.text}><h3>Cьогодення</h3>
					<span>
					Що відбувається в школі
					</span></div>
				</div>
				<div className={s.achievements}>
				<div className={s.text}><h3>Досягнення</h3><span>Наші досягнення</span></div>
					</div>
					<div className={s.infoForStud}>
						<div className={s.text}><h3>Інформація для учнів</h3></div>
					</div>
					<div className={s.bestStudents}>
					<div className={s.bestStudensText}><h2>Шкільний конкурс</h2><p>Учень/Учениця року-2020</p></div>
					</div>
				</div>
			</section>
				<section className={s.columsInfo}>
					<Colums />
				</section>
				<section className={s.additionalInfo}>
					<i class="fa fa-clock-o"></i>
						<div id='popup' className='popup'>
			<a className='area' href="/header"></a>
			<div className='popupContent'>
				<div className='image'>
					<img src={book} />
				</div>
				<a className='close' href="/main">X</a>
				</div>
					<div className='blockContainer'>
				<div className='blockPopup'><h3><h2>Патріотичне</h2> виховання юного покоління</h3></div>
				<div className='blockPopup'><h3><h2>Інформація</h2> для батьків</h3></div>
				<div className='blockPopup'><h3><h2>Інформація</h2> для учнів</h3></div>
					</div>
		</div>
				</section>
		</div>

		)
	}
}
	
export default MainContent;
