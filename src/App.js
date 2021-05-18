import logo from './logo.svg';
import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import MainContent from '../src/components/MainContent/MainContent.jsx';
import {Route} from 'react-router-dom';
import AboutUsInfo from './components/AboutUs/aboutUsInfo.jsx'; 
import News from './components/News/News.jsx';
import InfoStudents from './components/InfoStudents/InfoStudents.jsx';
import AllCollums from './components/AllColums.jsx';
import DistanceStudyingSection from './components/DistanceStudying/DistanceStudying.jsx';
import ScrollComponent from './components/ScrollButton/ScrollButton.jsx';
import './App.css';

function App() {
  return (
    <div>
    <Header />
    <ScrollComponent />
    <Route path= '/aboutUs' render={ () =>
    		<AboutUsInfo />}/>
    <Route path= '/news' render={ () => 
        <News />}/>
    		
    <Route path= '/main' render={ () =>
        <MainContent />}/> 
       <AllCollums />
       <DistanceStudyingSection />
       <InfoStudents />
       <Footer />
    
    </div>
  );
}

export default App;
