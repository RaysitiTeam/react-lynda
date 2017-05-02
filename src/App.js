//React Libraries
import React, { Component } from 'react';
//Custom libraries
import logo from './logo.svg';
import './styles/App.css';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddDayForm from './AddDayForm';
import Menu from './Menu';
import Member from './Member';

class App extends Component {
  state={
    title:'',
    message:''
  };

  getJson=()=>{
    // Axios.get(`https://api.github.com/users/${this.state.userName}`)
    Axios.get(`json/simple.json`)
    .then(response => {
    	//console.log('Returned response is: ', response);      
      this.setState({title:response.data.title});
      this.setState({message:response.data.message});
    });
  };//end:getJson
  render() {
    return (      
      <div className="App">
        <Menu/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.state.title}</h2>
        </div>
        {(this.props.location.pathname === '/')?
        <div>
          <Member admin={true}
                  name="Pramod Jingade"
                  email="avj2352@gmail.com"
                  thumbnail="https://randomuser.me/api/portraits/women/90.jpg"
                  makeAdmin={(email)=>console.log(email)}
          />
          <button className="btn btn-primary simple-button" onClick={this.getJson}>click Me !</button><p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
          </div>
        :(this.props.location.pathname === '/form')?<AddDayForm/>:null
        }        
      </div>
    );//end:return
  }//end:render
}//end-class:App

export default App;