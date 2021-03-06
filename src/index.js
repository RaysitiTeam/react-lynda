import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ACounter from './ACounter';
import Loader from './Loader';
import './styles/index.css';


const MainApp = (props)=>{
    return(
        <div>
            <App/>
            <ACounter total={50}
                      powder={20}  
                      backCountry={10}
                      goal={100}
            />            
        </div>
    );//end:return
};//end:MainApp

ReactDOM.render(<MainApp />,document.getElementById('root')); //ReactDOM
