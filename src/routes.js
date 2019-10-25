import React from 'react';
import AllTools from './components/AllTools';
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route path = '/alltools' component= {AllTools}/>
    </Switch>
)
