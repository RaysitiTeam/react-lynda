import React, {Component} from 'react';
import ClassNames from 'classnames';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/Loader.css';

class Loader extends Component{
    state = {
        isVisible:this.props.isLoading
    };

    // toggleLoader=()=>{
    //     this.setState(prevState=>({
    //         isVisible:!prevState.isVisible
    //     }));//end:setState
    // };//end:toggleLoader

    render(){
        const {isVisible} = this.state;

        // switch(this.props.isLoading){
        //     case true:
        //         this.toggleLoader();
        //         break;
        //     case false:
        //         this.toggleLoader();
        //         break;
        // }//end:switch

        let liClasses = ClassNames({
                            'loader-div': true,
                            'loader-active': this.state.isVisible,
                            'loader-inactive': !this.state.isVisible
                        });
        return(
            <div className={liClasses}>
                <div className="loader-box">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Loading...</p>
                </div>
            </div>
        );//end:return
    }//end:render    
}//end-class:Loader

export default Loader;