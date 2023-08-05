import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class StateManagement extends React.Component{
  constructor(){
      super()
      this.state={os:"Windows"}
  }
  mac=()=>this.setState({os:"Mac"})
  lin=()=>this.setState({os:"Linux"})
  win=()=>this.setState({os:"Windows"})
  render(){
    return(

      

      <div>
      <App />
      <h1>This is {this.state.os} operating system</h1>
      <button type="button" onClick={this.mac}>change to mac</button>
      <button type="button" onMouseOver={this.lin}>change to Linux</button>
      <button type="button" onMouseOver={this.win}>change to Windows</button>
      
      </div>
      

      )
      
    }
  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateManagement />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
