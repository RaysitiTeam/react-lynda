//React-icons
import React from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import Snowflake from 'react-icons/lib/ti/weather-snow';

const ACRow = ({date,resort,powder,backcountry}) =>{
        let currDate = new Date(date);
    return(
    <tr>
        <td>{currDate.getDate() + `/` + currDate.getMonth() + `/` + currDate.getFullYear()}</td>
        <td>{resort}</td>
        <td>{(powder)?<Snowflake/>:null}</td>
        <td>{(backcountry)?<Terrain/>:null}</td>
    </tr>
    );
};//end:ACRow

ACRow.defaultProps = {
    date:'01/01/2017',
    resort:'Loading',
    powder:false,
    backcountry:false    
};

export default ACRow;