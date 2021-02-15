import './App.css';
import Form from './components/Form/Form'
import Students from './components/Students/Students';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/students" component={Students}/>
          <Route path="/" exact component={Form}/>
        </Switch>        
      </div>
    </div>
  );
}

export default App;
