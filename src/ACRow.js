//React-icons
import React from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import Snowflake from 'react-icons/lib/ti/weather-snow';

const ACRow = (props) =>{
    return(
    <tr>
        <td>{props.date}</td>
        <td>{props.resort}</td>
        <td>{(props.powder)?<Snowflake/>:null}</td>
        <td>{(props.backcountry)?<Terrain/>:null}</td>
    </tr>
    );
};//end:ACRow

export default ACRow;