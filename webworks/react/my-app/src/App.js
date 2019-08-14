import React,{Component} from 'react';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppComponent from './AppComponent';
import AppContent from './AppContent';


class App extends Component{
  render(){

    const footerProps = {
      website : 'http://ps.com',
      company : 'Publicis Sapient',
      year : 2019
    }
      return (
        <div className="App">
          <AppHeader company = "Publicis Sapient: " createdBy = "Umang Mundhara"/>
          <AppComponent />
            {/* <div>
                <h1>Hellloooooooooooooooo!!!</h1>
            </div> */}
            {/* <AppFooter website = {footerProps.website} company = {footerProps.company} year = {footerProps.year}/> */}
            
            <AppContent/>
            <AppFooter {...footerProps}/>
        </div>
      );
  }
}

export default App;