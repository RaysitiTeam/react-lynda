import React, {Component} from 'react';
//CSS Styles
import FaShield from 'react-icons/lib/fa/shield';

class Member extends Component{

    render(){
        const{name,thumbnail,email,admin,makeAdmin} = this.props;
        return(
            <div className="col-lg-12">
            <h1>{name}{(admin)?<FaShield/>:null}</h1>
            <p><img src={thumbnail} alt="profile picture"/></p>
            <p><a onClick={makeAdmin}>Make Admin</a></p>
            <p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
        );
    }//end:render
}//end-class:Member

Member.defaultProps ={
    name:'Pramod',
    thumbnail:'https://randomuser.me/api/portraits/women/90.jpg',
    email:'avj2352@gmail.com',
    admin:true,    
}
export default Member;