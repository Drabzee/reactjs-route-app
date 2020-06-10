import React, { useState, useEffect, Fragment } from 'react';
import style from './EmployeeList.module.css';
import axios, { CancelToken } from '../../utils/axios';
import Loader from '../Loader/Loader';
import { NavLink } from 'react-router-dom';

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let isSubscribe = true;
    const source = CancelToken.source();

    (async () => {
      const res = (await axios.get('/employees.json', {cancelToken: source.token}));
      const empList = [];
      for(let key in res.data) {
        const emp = res.data[key];
        emp.id = key;
        empList.push(emp);
      }
      setTimeout(() => {
        if(isSubscribe) setEmployees(empList);
      }, 2000);
    })();

    return () => {
      source.cancel();
      isSubscribe = false;
    }
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const empDOM = employees.map((emp, index) => {
    return (
      <tr key={emp.id}>
        <th scope="row">{index+1}</th>
        <td>{emp.name}</td>
        <td>{numberWithCommas(emp.salary)}</td>
        <td>{emp.age}</td>
        <td>
          <NavLink to={`/employees/`+emp.id}>
            <button style={{padding: 0}} type="button" className="btn btn-link">Profile</button>
          </NavLink>
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      { employees.length === 0
        ? <Loader /> 
        : <div className={style.employeeList}>
            <h1 className="text-center">Employee List</h1>
            <hr className="my-4" />
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Age</th>
                  <th scope="col">Profile</th>
                </tr>
              </thead>
              <tbody>
                {empDOM}
              </tbody>
            </table>
          </div>
      }
    </Fragment>
  )
}

export default EmployeeList
