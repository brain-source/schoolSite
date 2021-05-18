import React from 'react';
import Popup from '../components/Popup/Popup.jsx';


let isActive = (props) => {
	debugger;
	let btnContainer = document.getElementByClassName('popup');
		let btns = btnContainer.getElementByClassName('popupContent');

	for (let i = 0; i < btns.length; i++ ) {
		btns[i].addEventListener('onmouseover', function() {
			let current = document.getElementByClassName('active');
			 current[0].className = current[0].className.replace("active", "");
			  this.className += " active";
		})
	}

}

export default Popup;