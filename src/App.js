import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Employee from './components/Employee/Employee';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/employees/:id" component={Employee} exact />
            <Route path="/employees" component={EmployeeList} exact />
            <Route path="/add-employee" component={EmployeeForm} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;