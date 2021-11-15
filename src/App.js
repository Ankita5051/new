import React from 'react'
import './App.css';

import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
//import Routes from './component/routing/Routes';
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/page/Home';
import About from './component/page/About';
import Contact  from './component/page/Contact';
import Package from './component/page/Package';
import PlaceDetail from './component/components/PlaceDetail';
import Facilities from './component/page/Facilities';

function App() {

  return (
    <>
      <Router>  
     <Header />

     <Switch>
     
     <Route exact path='/' component={Home}/>
   <Route exact path='/home' component={Home}/>
   <Route exact path='/package' component={Package}></Route>
   <Route exact path='/about' component={About}/>
   <Route exact path='/contact' component={Contact}/>
   <Route exact path="/placedetail/:pid" component={PlaceDetail} ></Route>
   <Route exact path='/facilities' component={Facilities }></Route>
  

    </Switch>
    <Footer/>
   </Router>
    </>
  )
}

export default App;
