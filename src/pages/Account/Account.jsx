import React from 'react'
// import { Grid, Table } from 'semantic-ui-react'
import currentUser from "../../assets/data/currentUser.json"
import empData from "../../assets/data/employeesData.json"
import "./Account.scss"

const Account = () => {
  let userData = empData.employees.filter((user, index) => user.userName === currentUser[0].username);

  const user = () => {
    let u = [];
    u.push(empData.employees[0])

    return u;
  }

  if (userData.length === 0) {
    userData = user();
  }
  const tableHeadings = ["EMPLOYEE ID", "ROLE", "FIRST NAME", "LAST NAME", "FULL NAME", "DOB", "DOJ", "MOBILE NUMBER", "EMAIL ADDRESS", "USERNAME", "PASSWORD", "EXPERIENCE", "EXPERIENCE"]

  // const fetchHeading = () => {

  // }

  // const formatHeader = (label) => {
  //   const words = label.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);
  //   const header = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  //   return words ? header : label;
  // };

  return (
    <div className='account-container'>
      {/* <Grid >
        <Grid.Column >
          <Table >
            <Table.Body>
              { Object.entries(userData[0]).map((detail, value) => (
                (detail[0] !== "src" && (
                  <Table.Row key={ value } >
                    <Table.HeaderCell>{ formatHeader(detail[0]) } : </Table.HeaderCell>
                    <Table.Cell>{ detail[1] }</Table.Cell>
                  </Table.Row>
                )
                )
              )) }
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid> */}
      <table className='account-table'>
        <tbody className='table-body'>
          { Object.entries(userData[0]).map((detail, value) => (
            (detail[0] !== "src" && (
              <tr className='table-row' key={ value } >
                <th className='table-heading' >{ tableHeadings[value] }</th>
                <td className='table-data' >{ detail[1] }</td>
              </tr>
            )
            )
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default Account