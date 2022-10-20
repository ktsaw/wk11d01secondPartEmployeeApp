

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";


export default function HomePage(props) {

  
  return (
    <>
    <div className="homepage">
      
      <Header />
      <SearchBar />
      <EmployeeList setEmployeeId={props.setEmployeeId}/>
    </div>
    </>
  );
}