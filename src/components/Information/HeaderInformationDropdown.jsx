import React, {useState} from 'react';
import Popup from '../Popup/Popup.jsx';
import s from  '../MainContent/MainContent.module.css';
import isActive from '../../JavaScript/isActive.js';
import NavLink from 'react-router-dom';


let Information = (props) => {
	
	const [open, setOpen] = useState(false);
	return (
		<>
	<div className={s.dropdownbtn}>
		<li className={s.btn}>
		<a className={s.blockPopup} href="#" onMouseOver={() =>
		 setOpen(true)}>
		Інформація</a></li>
	</div>
		<div>
		{ open == true && 
				<Popup />
		} 

		</div>

		</>
		)
}

export default Information;
