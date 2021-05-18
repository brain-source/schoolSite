import React from 'react';
import '../Popup/Popup.css';
import {NavLink} from 'react-router-dom';
import book from '../../images/book.jpg';

let Popup = (props) => {
	debugger;
	return (
		<div id='popup' className='popup'>
			<a className='area' href="/header"></a>
			<div className='popupContent'>
				<div className='image'>
					<img src={book} />
				</div>
				<a className='close' href="/main">X</a>
				</div>
					<div className='blockContainer'>
				<div className='block'>Патріотичне виховання юного покоління</div>
				<div className='block'>Інформація для батьків</div>
				<div className='block'>Інформація для учнів</div>
					</div>
					</div>
		)
}

export default Popup;