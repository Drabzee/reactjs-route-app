import React, {useState, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import style from './EmployeeForm.module.css';
import axios from '../../utils/axios';
import Loader from '../Loader/Loader';

const EmployeeForm = () => {
  
  const [postCompletion, setPostCompletion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const employee = {};

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await axios.post('/employees.json', employee);
    setPostCompletion(true);
    console.log(res);
  }

  return postCompletion
    ? <Redirect to='/employees' />
    : (
      <Fragment>
        {isLoading ? <Loader /> : null}
        <div className={style.employeeForm}>
          <h1 className="text-center">Add Employee</h1>
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Employee Name</label>
              <input onChange={(event) => employee.name = event.target.value} type="text" className="form-control" id="name" placeholder="Enter name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Employee Email</label>
              <input onChange={(event) => employee.email = event.target.value}  type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="salary">Employee Salary</label>
                <input onChange={(event) => employee.salary = event.target.value}  type="number" className="form-control" min="0" id="salary" placeholder="Enter salary" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="age">Employee Age</label>
                <input onChange={(event) => employee.age = event.target.value}  type="number" className="form-control" min="18" id="age" placeholder="Enter age" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </Fragment>
    )
}

export default EmployeeForm
