import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Table } from 'semantic-ui-react';
import empData from "../../assets/data/employeesData.json";
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import EmployeeModal from '../EmployeeModal/EmployeeModal';

const ProjectDetails = (props) => {
  const location = useLocation();
  const project = location.state.project || "";

  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || "");

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
  }

  const fetchDevelopers = (teamMembers) => {
    let arr = empData.employees.filter((emp, index) => teamMembers.includes(emp.empID))

    return arr;
  }

  const headings = ["Title", "Project Team", "Src", "Description", "Tech Stack"];

  return (
    <div>
      <Grid style={ { width: "100vw" } }>
        <Grid.Column >
          <Table >
            <Table.Body>
              { Object.entries(project).map((detail, index) => (
                (detail[0] !== "teamMembers" && (
                  <Table.Row key={detail}>
                    <Table.HeaderCell>{ headings[index] } : </Table.HeaderCell>
                    <Table.Cell>{ detail[1] }</Table.Cell>
                  </Table.Row>
                )
                )
              )) }
              <Table.Row>
                <Table.HeaderCell>Team Members : </Table.HeaderCell>
                <Table.Cell>
                  <EmployeeCard filteredEmp={ fetchDevelopers(project.teamMembers) } clickHandler={ clickHandler } />
                  <EmployeeModal selectedEmp={ selectedEmp } open={ open } setOpen={ setOpen } />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default ProjectDetails