import React, {useState, useEffect} from 'react';
import axios, { CancelToken } from '../../utils/axios';
import style from './Employee.module.css';
import Loader from '../Loader/Loader';

const Employee = (props) => {

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    let isSubscribe = true;
    const source = CancelToken.source();

    (async () => {
      try {
        const res = await axios.get(`/employees/${props.match.params.id}.json`, {cancelToken: source.token});
        setTimeout(() => {
          if(isSubscribe) setEmployee(res.data);
        }, 2000);
      } catch(err) {
        console.log(err);
      }
    })();
    return () => {
      isSubscribe = false;
      source.cancel();
    };
  }, [props.match.params.id]);

  return Object.keys(employee).length === 0
    ? <Loader />
    : (
        <div className={style.employee}>
          <h1 className="text-center">Employee Panel</h1>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th className={style.field} scope="col-md-3">Field</th>
                <th className={style.value} scope="col-md-9">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Employee ID</th>
                <td>{props.match.params.id}</td>
              </tr>
              <tr>
                <th scope="row">Name</th>
                <td>{employee.name}</td>
              </tr>
              <tr>
                <th scope="row">Salary</th>
                <td>{employee.salary}</td>
              </tr>
              <tr>
                <th scope="row">Age</th>
                <td>{employee.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
}

export default Employee
