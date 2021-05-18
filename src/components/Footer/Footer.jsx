import React from 'react';
import s from '../Footer/Footer.module.css';

let Footer = (props) => {
	return (
		<div className={s.footer}>
			<div className={s.leftContainer}>
				<p className={s.p}>КОНТАКТИ</p>
					<p className={s.p}>Address: Vul. Lototsʹkoho, Snyatyn, Ivano-Frankivsk 
					Oblast, 78300</p>
					<p className={s.p}>Phone: 03476 21236</p>
				</div>
				
			<div className={s.madeBy}><p>This site was made by <strong>Borchuk Denys</strong></p>
			With the help of <strong>React + Redux</strong> frameworks</div>
		</div>
	)
}

export default Footer;
