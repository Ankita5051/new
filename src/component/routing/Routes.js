import React from 'react'
import {Route ,Switch}  from "react-router-dom";
import About from '../page/About';
import Contact from '../page/Contact';
import Package from '../page/Package';
import PlaceDetail from '../components/PlaceDetail';
import Facilities from '../page/Facilities';
const Routes=()=> {
    return (
        <Switch>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
         <Route exact path='/package' component={Package}></Route>
         <Route exact path='/facilities' component={Facilities}></Route>
      <Route exact path='/placedetail' component={PlaceDetail}></Route>
        </Switch>
    )
}

export default Routes
