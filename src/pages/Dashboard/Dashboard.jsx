import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import empData from "../../assets/data/employeesData.json";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import EmployeeFilter from "../../components/EmployeeFilter/EmployeeFilter";
import EmployeeModal from "../../components/EmployeeModal/EmployeeModal";
import "./Dashboard.scss";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || "");
  const [filteredEmp, setFilteredEmp] = useState(empData);
  const [onLoading, setOnLoading] = useState(true);

  useEffect(() => {
    //   axios.get("http://192.168.1.196:8080/employee/listEmployee").then((res) => {
    //     setFilteredEmp(res.data.data);
    //     setOnLoading(false);
    //   });

    if (filteredEmp.length > 0) setOnLoading(false);
  }, [filteredEmp]);

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
  };

  const updatedEmployeeList = (newEmpList) => {
    setFilteredEmp([...newEmpList]);
  };

  console.log(filteredEmp)

  return (
    <div className="dashboard-container">
      <Grid style={{ width: "100%", margin: 0 }}>
        <Grid.Row className="filter-row">
          <EmployeeFilter filteredEmp={filteredEmp} setFilteredEmp={setFilteredEmp} defaultFilter={"role"} defaultSort={"exp"} empData={empData} />
        </Grid.Row>
        <Grid.Row className="employee-card-row">
          <Grid.Column width={16}>
            <EmployeeCard filteredEmp={filteredEmp} onLoading={onLoading} selectedEmp={selectedEmp} clickHandler={clickHandler} />
          </Grid.Column>
          <Grid.Column width={4}>
            <EmployeeModal filteredEmp={filteredEmp} setFilteredEmp={setFilteredEmp} selectedEmp={selectedEmp} setSelectedEmp={setSelectedEmp} open={open} setOpen={setOpen} updatedEmployeeList={updatedEmployeeList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
