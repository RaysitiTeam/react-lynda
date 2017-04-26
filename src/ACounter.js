import React, { Component } from 'react';
import Axios from 'axios';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/ACounter.css';
import Loader from './Loader';

class ACounter extends Component {
    state = {
        title: 'Pramod',
        setLoader: false
    };
    render() {
        const { setLoader } = this.state;
        return (
            <div className="container">
                <h1>ACounter Module</h1>
                <Loader isLoading={setLoader} />
                <div className="container">
                    <div className="col-lg-12 ski-day-counter">
                        <div className="total-days">
                            <span> 5 Days </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 powder-days">
                            <span> 2 Days </span>
                        </div>
                        <div className="col-lg-6 backcountry-days">
                            <span> 1 Hiking Day</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }//end:render
}//end-class:ACounter

export default ACounter;