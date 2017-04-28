# Lynda React

 ## Useful Links
- [Schema Store for Web Development](http://schemastore.org/json/)
- [React Icons Website](https://gorangajic.github.io/react-icons/fa.html)
 ## Table of Contents
- [Intalling Web Pack](#installing-web-pack)
- [Importing React Components](#importing-react-components)
- [Creating a Simple Custom Loader using React](#creating-a-simple-custom-loader-using-react)
- [React Basic Dos and Donts](#react-basic-dos-and-donts)
- [Three ways of Creating React Components](#three-ways-of-creating-react-components)
- [Package Json for the project](#package-json-for-the-project)


 # Installing Web Pack

 ```sh
 npm install webpack babel-loader webpack-dev-server --save-dev
 npm install -g webpack
 npm install react react-dom --save
 npm install axios --save
 ```
>NOTE: If you prefer not to use global command `webpack`

 ```sh
 ./node_modules/.bin/webpack
 ```


 We then create a `Web pack config js` file

 ```js
 var webpack = require("webpack");
 module.exports = {
    entry:"./src/index.js",
    output:{
        path: "dist/assets",
        filename:"bundle.js",
        publicPath: "assets",
    },
    devServer:{
        inline:true,
        contentBase:"./dist",
        port:3000
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:["babel-loader"],
                query:{
                    presets:["latest", "state-0", "react"]
                }
            }
        ]
    }
 }
 ```

 ---

 # Importing React Components

 You can import React, JQuery, Axios in this package by simply using the `import` key word and asking for the component

 ```js
 import React, {Component} from 'react'; //Imports React and React.Component
import Axios from 'axios'; //Imports the Axios library
import $ from 'jquery'; //Imports the jQuery library, mighty cool
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //imports Bootstrap CSS file, even cooler
 ```

 ---

 # Creating a Simple Custom Loader using React

 This is a basic Loader which uses the following libraries

 - Bootstrap
 - jQuery (Optional, but not required)
 - classnames (Another React supporting library)

The following is the sudo-code

```js
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
```

And it's corresponding CSS files is as follows:

```css
.loader-div{
    width: 100%;
 
 text-align: center;   
}

.loader-box{    
    color:#fff;
    border-radius: 15px;
    background: rgba(34,34,34,0.8);
    text-align: center;
    margin: 0 auto;
    border: 1px solid #4C4C4C;
    width: 150px;
    height: auto;
}

.loader-active{
    animation: Opacity-fade-in .4s linear;
    opacity: 1;
}

.loader-inactive{
    animation: Opacity-fade-out .4s linear;
    opacity: 0;
}

@keyframes Opacity-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes Opacity-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

---

# React Basic Dos and Donts

Note the following Rules when writing Props in a React component
- `props` in a `Class component` can be simply accessed using `this.props.propName`
- `props` in a `function component` need to sent as an arguement when defining the function component

```js
const Button = (props)=>{
    //...Component logic
}
```

- When assigning props values, if the value is a string, then simply pass using double quotes
- When the value is anything other than string type, then pass using the curly braces

```js
<Button stringValue = "This is a string" numberInput = {this.inputValue} />
```

# Three ways of Creating React Components

There are three ways of Creating React Components so far (based on all the examples that I have seen)...

## 1. Primitive React Component (might be deprecated)...
```js
export const PrimitiveComponent = React.createClass({
    methodOne(param1){}, methodTwo(param1,param2){}, methodThree(param3){},
    render(){
        return(
            <div>This is a primitive Component </div>
        );//end:return
    }//end:render
});//end:createClass
```

## 2. Function Component (for stateless Components)...

This is supported in the EcmaScript 6 / 2015 format..

```js
const FunctionalComponent = (props) =>{
    return(
        <div>This is a functional Component </div>
    );//end:return
}//end:functionComponent

export default FunctionComponent
```

## 3. Class Component (for statehandling and setState and prevState features)

This is also supported in the Ecmascript 6 / 2015 format...

```js
class ClassComponent extends React.Component{
    state = {simpleState:"HelloWorld"}
    render(){
        return(
            <div>This is a Class component</div>
        );//end:return
    }//end:render
}//end-class:ClassComponent

export default ClassComponent
```


# Package Json for the project

The following is the `package.json` for the project: 

```js
{
  "name": "react-basics",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.16.1",
    "bootstrap": "^3.3.7",
    "classnames": "^2.2.5",
    "jquery": "^3.2.1",
    "react": "^15.5.4",
    "react-dom": "^15.5.4",
    "react-icons": "^2.2.3"
  },
  "devDependencies": {
    "react-scripts": "0.9.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

```