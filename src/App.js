import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Main} from "./Main";
import {Find} from "./components/FindCargo/Find/Find";
import {NewTransaction} from "./components/NewTransaction/NewTransaction/NewTransaction";
import {Pendings} from './components/Pendings/Pendings/Pendings'


const App = (props) => {
        return (
            <div className='app-wrapper'>
                <Switch>
                    <Route exact={true} path='/' render={() => <Main/>}/>
                    <Route exact={true} path='/find' render={() => <Find/>}/>
                    <Route exact={true} path='/new' render={() => <NewTransaction/>}/>
                    <Route exact={true} path='/pendings' render={() => <Pendings/>}/>
                </Switch>
            </div>
        )
}

export default App;
