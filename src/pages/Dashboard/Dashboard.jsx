import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import empData from '../../assets/data/employeesData.json';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import EmployeeFilter from '../../components/EmployeeFilter/EmployeeFilter';
import EmployeeModal from '../../components/EmployeeModal/EmployeeModal';
import './Dashboard.scss';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || '');
  const [filteredEmp, setFilteredEmp] = useState(empData.employees);

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
  };

  return (
    <div className='dashboard-container'>
      <Grid style={{ width: '100%', margin: 0 }}>
        <Grid.Row className='filter-row'>
          <EmployeeFilter filteredEmp={filteredEmp} setFilteredEmp={setFilteredEmp} />
        </Grid.Row>
        <Grid.Row className='employee-card-row'>
          <Grid.Column width={16}>
            <EmployeeCard filteredEmp={filteredEmp} selectedEmp={selectedEmp} clickHandler={clickHandler} />
          </Grid.Column>
          <Grid.Column width={4}>
            <EmployeeModal selectedEmp={selectedEmp} open={open} setOpen={setOpen} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
