//Libraries
import React from 'react';
import $ from 'jquery';
//react-router@4.1.1 has some major changes, so using the react-router@3.0.0
import {Router, Route, hashHistory} from 'react-router'; 
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
//Custom Components
import App from './App';
import ACounter from './ACounter';
import ACList from './ACList';
import ACRow from './ACRow';
import Whoops404 from './Whoops404';
import Loader from './Loader';
//Styles
import './styles/index.css';

//Router has a ppty called history to which we assign hashHistory, to keep track for URL's address history
const MainApp = (props)=>{
    return(
        <div>            
            <Router history={hashHistory}>                
                <Route path="/" component={App}/>            
                <Route path="/form" component={App}/>            
                <Route path="/count" component={ACounter}/>            
                <Route path="/list" component={ACList}/>
                <Route path="*" component={Whoops404}/>
            </Router>
        </div>
    );//end:return
};//end:MainApp

ReactDOM.render(<MainApp />,document.getElementById('root')); //ReactDOM

//Using jQuery to trigger React Component

let selectedRow = $('#clickItem');
let loaderDiv = $('#loaderDivArea');
console.log('Selected loader div element is: ', loaderDiv[0]);
// selectedRow.on('click',function(){
//     ReactDOM.render(<Loader isLoading="true"/>,loaderDiv[0]); //ReactDOM
// });
//jQuery using Ecmascript 6 arrow function
selectedRow.on('click',()=>ReactDOM.render(<Loader isLoading="true"/>,loaderDiv[0]));