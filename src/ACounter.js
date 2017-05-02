import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/ACounter.css';
import Loader from './Loader';
//React-icons
import Terrain from 'react-icons/lib/md/terrain';
import Snowflake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';


class ACounter extends Component {

    state = {
        title: 'Pramod',
        setLoader: false
    };

    decimalToPercent = (decimal) =>{
        return (Math.floor(decimal*100) + '%');
    };//end:decimalToPercent

    calcGoalProgress = (total, goal)=>{
        return this.decimalToPercent(total/goal);
    };//end:calcGoalProgress
    render() {
        const { setLoader } = this.state;
        return (
            <div className="container">
                <h1>ACounter Module</h1>
                <Loader isLoading={setLoader} />
                <div className="container">
                    <div className="col-lg-12 ski-day-counter">
                        <div className="total-days">
                            <span>{this.props.total}</span>
                            <Calendar/>
                            <span> 5 Days </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 powder-days">
                            <span> {this.props.powder} </span>
                            <Snowflake/>
                            <span> 2 Days </span>
                        </div>
                        <div className="col-lg-6 backcountry-days">
                            <span> {this.props.backCountry}</span>
                            <Terrain/>
                            <span> 1 Hiking Day</span>
                        </div>
                        <div className="col-lg-12 goal-div">
                            <span>Goal: {this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }//end:render
}//end-class:ACounter

ACounter.defaultProps = {    
            total:50,
            powder:50,
            backCountry:15,
            goal:100
    
};

//Type definition - React's style
ACounter.propTypes = {
    total:PropTypes.number,
    powder:PropTypes.number,
    backCountry:PropTypes.number,
    goal:PropTypes.number
};

export default ACounter;