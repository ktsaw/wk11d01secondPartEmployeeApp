
export default function EmployeeListItem(props) {
    return (
      <div className="employeeListItem" onClick={() => props.setEmployeeId(props.id)} > 
    
        <img src={props.img} alt="employeePic" />
        <div className="employeeTitle">
          <span className="employeeName">{props.name}</span>
          <span className="employeeTitle">{props.title}</span>
          </div>
        </div>
  
    );
  }