import React, {Component} from 'react';
import Axios from 'axios';
import ACRow from './ACRow';
import ClassNames from 'classnames';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ACList extends Component{
    state = {
        resortList:['','']
    };

    constructor(){
        super();
        this.getHttpRequest();
    }//end:constructor

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
                    {this.state.resortList.map((item,i)=><ACRow key={i}
                                                            date={item.date}
                                                            resort = {item.resort}
                                                            powder = {item.powder}
                                                            backcountry = {item.backcountry}
                    />
                    )}
                </tbody>
            </table>
        );//end:return
    }//end:render
}//end:class-ACList

export default ACList;
