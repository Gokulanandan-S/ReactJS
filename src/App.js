
import { useState } from 'react';
import './App.css';
import img from './IMG_0606.png';


function App() {
  const [show,setshow]=useState(false)
  function samp(){
    setshow(!show)
    }
  function print(){
    window.print()
  }
  return (
    <div className="main">
      
        <h1>Gokulanandan</h1>
        <h1> this is <span>Gokulanandan</span> </h1>
        <h2><ins>Artificial intelligence <br></br> data science</ins></h2>
        <h3 className="this"><mark><b>5<sup>th</sup> semester</b></mark></h3>
        <h4><strike>Value added course</strike></h4>
        <p>Welcome to <em>my</em> brand new website. This site will be my <strong>new</strong> home on the web.</p>
        <p>10<sup>th</sup>:95.4%</p>
        <p>11<sup>th</sup>:96.6%</p>
        <p>12<sup>th</sup>:99.5%</p>
        <div className="second">
          <ol>
              <li>first</li>
              <li>second</li>
          </ol>
        <div className="buttonn">
          
          <button type="button" onClick={samp}>qwerty</button>
          {show && <div>
            <p>Naan than</p>
            <p>unnna than</p>
            </div>}
           
          <button type='button' onClick={print}>Print My page</button>
        </div> 
        
        </div>
          <img src={img} alt="image bruhh" height="360" width="360"></img><br></br>
          <a href="https://html.com/">click here to learn about HTML</a>
        
        <p className="border">Data cleaning (sometimes also known as data cleansing or data wrangling) is an important early step in the data analytics process. 
            This crucial exercise, which involves preparing and validating data, usually takes place before your core analysis. 
            Data cleaning is not just a case of removing erroneous data, although that's often part of it.
            The majority of work goes into detecting rogue data and (wherever possible) correcting it.</p>
    </div>


      
    
  );
}

export default App;
