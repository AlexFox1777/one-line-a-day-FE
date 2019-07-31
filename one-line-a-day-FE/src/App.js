import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import './App.css';

// components
import Login from './components/Login';
import SignUp from './components/SignUp';
import JournalEntries from './components/JournalEntries';
import WillBeReplacedByJulieFile from "./components/WillBeReplacedByJulieFile";

function App() {
	return (
		<div className="App">
			<Route exact path="/" render={props => <Login {...props} />}/>
			<Route exact path="/signup" render={props => <SignUp {...props} />}/>
			<PrivateRoute exact path="/home" component={JournalEntries}/>
			<PrivateRoute path="/home/:entryId"
						  component={WillBeReplacedByJulieFile}  />
		</div>
	);
}

export default withRouter(App);

