//react libraries
import React, {Component} from 'react';
import Axios from 'axios';
import ClassNames  from 'classnames';
//custom libraries
import ACRow from './ACRow';
import Menu from './Menu';
//Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ACList extends Component{
    state = {
        resortList:['','']
    };

    constructor(){
        super();
        
    }//end:constructor

    componentDidMount  = () =>{
        this.getHttpRequest();
    }//end:will run after the render() 

    getHttpRequest = () =>{
        Axios.get(`json/resort.json`)
        .then(response =>{
            console.log('XHR runs');
            // this.state.resortList = response.data;
            this.setState({resortList:response.data}); // Avoid race condition   
        });//end:then
    };//end:getHttpRequest

    render(){        
        let liTableClass = ClassNames({ 'container':true,'table':true,'table-inverse':true });
        return(
            <div>
            <Menu/>
            <table className={liTableClass}>
                <thead>
                    <tr>
                      <th>Resort</th>
                      <th>Date</th>
                      <th>Powder</th>
                      <th>Backcountry</th>
                    </tr>
                </thead>
                <tbody>                  
                    {this.state.resortList.length?this.state.resortList.map((item,i)=><ACRow key={i}
                                                            date={item.date}
                                                            resort = {item.resort}
                                                            powder = {item.powder}
                                                            backcountry = {item.backcountry}
                    />
                    ):<ACRow/>}
                </tbody>
            </table>
            </div>
        );//end:return
    }//end:render
}//end:class-ACList

export default ACList;
