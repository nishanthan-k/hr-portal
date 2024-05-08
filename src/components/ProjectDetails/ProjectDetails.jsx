import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Table } from "semantic-ui-react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import EmployeeModal from "../EmployeeModal/EmployeeModal";
import "./ProjectDetails.scss";

const ProjectDetails = (props) => {
  const location = useLocation();
  const project = location.state.project || "";
  const [teamMembers, setTeamMembers] = useState([]);

  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(open || "");

  // useEffect(() => {
  //   let employee = project.employee.split(",");
  //   // console.log(employee);
  //   employee.map(emp => {
  //     return axios.post("http://192.168.1.196:8080/employee/showEmpDetails", {
  //       empId: parseInt(emp)
  //     })
  //       .then(res => setTeamMembers(prevTeam => { return [...prevTeam, res.data.data] }))
  //   })
  // }, [project.employee])

  // console.log(teamMembers);

  const clickHandler = (emp) => {
    setOpen(!open);
    setSelectedEmp(emp);
  };

  // const fetchDevelopers = (teamMembers) => {
  //   let arr = empData.employees.filter((emp, index) => teamMembers.includes(emp.empID))

  //   return arr;
  // }

  // const headings = ["Title", "Project Team", "Src", "Description", "Tech Stack"];

  return (
    <div className="project-details">
      <Grid>
        <Grid.Column>
          <Table className="table">
            <Table.Body>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.Cell>{project.title}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.Cell>{project.description}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.HeaderCell>Tech Stack</Table.HeaderCell>
                <Table.Cell>{project.techStack}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
                <Table.Cell>{project.projectTeam}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.HeaderCell>Team Members</Table.HeaderCell>
                {/* {teamMembers.map(emp => ( */}
                {/* <Table.Cell>{emp.fullName}</Table.Cell> */}
                <Table.Cell>
                  <EmployeeCard filteredEmp={teamMembers} clickHandler={clickHandler} />
                  <EmployeeModal selectedEmp={selectedEmp} open={open} setOpen={setOpen} />
                </Table.Cell>
                {/* // ))} */}
              </Table.Row>

              {/* { Object.entries(project).map((detail, index) => (
                (detail[0] !== "teamMembers" && (
                  <Table.Row key={ detail }>
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
              </Table.Row> */}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProjectDetails;
