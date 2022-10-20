
import EmployeeListItem from "./EmployeeListItem";
import employeesArr from "../data.js";

export default function EmployeeList(props) {
  const employees = employeesArr.map((ele, idx) => {
    return (
      <EmployeeListItem
        id={ele.id}
        key={idx}
        name={ele.name}
        title={ele.title}
        img={ele.img}
        setEmployeeId={props.setEmployeeId}
        office={ele.office}
        
       
      />
    );
  });

  return <div className="employeeList">{employees}</div>;
}
 