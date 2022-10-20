// import logo from './logo.svg';
 import './App.css';

import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";
import { useState } from "react";

import employeesArr from "./data";
console.log("this is employeesArr:", employeesArr);

export default function App() {
  const [employeeId, setEmployeeId]=useState(0)
  const [employeeList, setEmployeeList] = useState(employeesArr)

  return (
    <div className="App">
      <HomePage className="homepage" setEmployeeId={setEmployeeId} />
      
      <EmployeePage employeeId={employeeId} employeeList ={employeeList}  />

    </div>
  );
}