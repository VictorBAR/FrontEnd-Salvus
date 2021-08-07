import React from 'react';
import Routes from '../components/Routes';
import './App.css';

//const App = () => <Routes />

class App extends React.Component{
    render(){
        return(
            <div className="App">
                 <Routes  />
            </div>
        )
    }
}
   
export default App;
