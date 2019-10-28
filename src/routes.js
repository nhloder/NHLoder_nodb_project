import React from 'react';
import AllTools from './components/AllTools';
import {Switch, Route} from 'react-router-dom'
import ToolBox from './components/ToolBox';
// import PowerTools from './components/PowerTools';
// import AnalogTools from './components/AnalogTools';


export default (
    <Switch>
        <Route exact path = '/' component = {ToolBox}/>
        <Route path = '/AllTools' component= {AllTools}/>
        {/* <Route path = '/PowerTools' component= {PowerTools}/>
        <Route path = '/AnalogTools' component= {AnalogTools}/> */}
    </Switch>
    
)
