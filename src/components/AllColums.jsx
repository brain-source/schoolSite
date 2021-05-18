import React from 'react';
import Booling from '../components/MainContentColums/Booling/booling.jsx';
import EducationalActivities from '../components/MainContentColums/EducationalActivities/EducationalActivities.jsx';
import GettingAnEducation from '../components/MainContentColums/GettingAnEducation/GettingAnEducation.jsx';
import Graduates from '../components/MainContentColums/Graduates/Graduates.jsx';
import InclusiveStudy from '../components/MainContentColums/InclusiveStudy/InclusiveStudy.jsx';
import MetodicalWorks from '../components/MainContentColums/MetodicalWorks/MetodicalWorks.jsx';
import Patrons from '../components/MainContentColums/Patrons/Patrons.jsx';
import {Route} from 'react-router-dom';
import s from '../components/AllCollums.module.css';

let AllCollums = (props) => {
	return (
		<div className={s.allCollums}>
		<div>
			<Route path='/booling' render={ () =>
				<Booling />}/>
		</div>
		<div>
			<Route path='/booling' render={ () =>
			<EducationalActivities />}/>
		</div>
		<div>
			<Route path='/study' render={ () =>
			<GettingAnEducation />}/>
		</div>
		<div>
			<Route path='/graduates' render={ () =>
			<Graduates />}/>
		</div>
		<div>
			<Route path='/inclusiveStudy' render={ () =>
			<InclusiveStudy />}/>
		</div>
		<div>
			<Route path='/metodicalWorks' render={ () =>
			<MetodicalWorks />}/>
		</div>
		<div>
			<Route path='/lyceumPatron' render={ () =>
			<Patrons />}/>

		</div>
		</div>

		)
}

export default AllCollums;