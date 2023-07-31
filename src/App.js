
import { useState } from 'react';
import './App.css'
import Navber from './compononts/Navber';
import TextForms from './compononts/TextForms';
import Alert from './compononts/Alert';
import About from './compononts/About';
import router from 'react-router-dom'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";


function App() {
  const[mode,setmode] = useState('light');
  const[set, sttext] = useState('Eneble DarkMode');
  const[bText, setCol] = useState('Black');
  const[alert, setAlert] = useState(null);
 
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const swtDark = () => {
    if(mode === 'light')
    {
      setmode('dark')
      sttext('Eneble DarkMode')
      document.body.style.backgroundColor = '#100a49'
      setCol('white')
      showAlert("Dark mode was enebeld", "success")
      document.title = "Text Editor - Dark Mode"
      setInterval(() => {
        document.title = "Edit Your Text"
      }, 1500);
    }else
    {
      setmode('light')
      sttext('Eneble LightMode')
      document.body.style.backgroundColor = 'white'
      setCol('black')
      showAlert("Light mode was enebeld", "success")
      document.title = "Text Editor - Light Mode"
      setInterval(() => {
        document.title = "Download App Now"
      }, 2000);
    }

  }
  return (
    <Router>
      <div className="App">
        
        <Navber title="Text Editor" mode = {mode} swtDark = {swtDark} set={set}/>
        <Alert alert = {alert} showAlert={showAlert}/>
        
          <Switch>
            <Route path='/'>
              <TextForms bText = {bText} showAlert={showAlert} />

            </Route>
            <Route path='/About'>
              <About/>

            </Route>
          </Switch>
          
         
       
           <About/>

         
          
        
      </div>
      </Router>
  );
}

export default App;
