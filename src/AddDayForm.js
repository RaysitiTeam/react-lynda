//AddDayForm - function component
import React,{Component} from 'react';
import PropTypes from 'prop-types';

class AddDayForm extends Component{

    //Whenever we invoke a function using this.submit or this.customMethod, we need to expose it/bind it
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }//end:constructor
    submit = (e)=>{
        e.preventDefault();
        console.log('Resort value is:', this.refs.resort.value);
        console.log('Entered Date is:', this.refs.date.value);
        console.log('is Powder checked?', this.refs.powder.checked);
        console.log('is Backcountry checked?', this.refs.backcountry.checked);
    };//end:submit

    render(){
        const {resort,date,powder,backcountry} = this.props;
        return(
        <div className="container">
            <h1>This is a simple Form</h1>
            <form className="form form-group" onSubmit={this.submit}>                
                <p>
                    <label htmlFor="userName">Enter Name</label>
                    <input ref="resort" type="text" name="userName" id="userName" placeholder="Enter your name" required defaultValue = {resort}/>
                </p>
                <p>
                    <label htmlFor="userDate">Enter Date</label>
                    <input ref="date" type="text" name="userDate" id="userDate" placeholder="Enter date" required defaultValue = {date}/>
                </p>
                <p><input ref="powder" type="checkbox" name="powder" id="powder" defaultChecked={powder}/> Powder</p>
                <p><input ref="backcountry" type="checkbox" name="backcountry" id="backcountry" defaultChecked={backcountry}/>Backcountry</p>
                <p>
                    <button className="btn btn-info" type="submit">Submit</button>
                </p>
            </form>
        </div>
    )
    };//end:render
}//end:class-AddDayForm

//Adding Type check and required ppty to Component's proptypes

AddDayForm.propTypes = {
    resort: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    powder:PropTypes.bool.isRequired,
    backcountry:PropTypes.bool.isRequired
}//end:propTypes

AddDayForm.defaultProps = {
    resort: 3,
    date: '02/01/2017',
    powder:false,
    backcountry:false
}//end:defaultProps

export default AddDayForm;