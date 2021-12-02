import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//สร้าง component แยก
import HelloComponent from  './components/HelloComponent'

//ทดลองสร้าง Component

//function component 
function HellComponentFunc(){
      return <h1>Hello Component</h1>
}

//Class component
class  HellComponentClass extends React.Component{
  render(){
    return <h1>Hello Component (Class)</h1>
  }
}

ReactDOM.render(<HelloComponent/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
