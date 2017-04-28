import React, {Component} from 'react';
import Axios from 'axios';
import ACRow from './ACRow';

class ACList extends Component{
    state = {
        resortList:['']
    };
    
    getHttpRequest = () =>{
        Axios.get(`json/simple.json`)
        .then(response =>{
            this.state.resortList = response.data;
        });//end:then
    };//end:getHttpRequest

    render(){
        this.getHttpRequest();        
        return(
            <table>
                <thead>
                    <th>Resort</th>
                    <th>Date</th>
                    <th>Powder</th>
                    <th>Backcountry</th>
                </thead>
                <tbody>
                    {this.state.resortList.map((day,i) => 
                        < ACRow key={i}
                                resort = {day.resort} 
                                date = {new Date(day.date)} 
                                powder = {day.powder} 
                                backcountry = {day.backcountry} 
                                />
                    )}
                </tbody>
            </table>
        );//end:return
    }//end:render
}//end:class-ACList

export default ACList;