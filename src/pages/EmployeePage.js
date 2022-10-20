

import Header from "../components/Header"

export default function EmployeePage(props) {
    console.log('props employee', props.employeeId, props.employeeList)
    
    let singleEmployee = props.employeeList.find(function (employee) {
        return employee.id === props.employeeId
    })
    
    return (
        <div className="employeePage">
           
                <Header />
           
            {singleEmployee !== undefined ?
                <div className="employeeList" >

                    <div className="photoTitleContainer">
                        <img className="singleEmployeePic" src={singleEmployee.img} alt="employeePic" />
                        
                        <div className="employeeTitle">
                            <span className="employeeName">{singleEmployee.name}</span>
                            <span className="employeeTitle">{singleEmployee.title}</span>
                        </div>
                    </div>

                    <div className="employeeListContact" >
                        <div>
                                <p >Office Phone</p>
                                <span className="employeeOffice">{singleEmployee.office}</span>
                            </div>
                            
                        </div>

                </div> : null
            }

        </div>

    );
}