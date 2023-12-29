import React from 'react'
import { Grid, Table } from 'semantic-ui-react'
import currentUser from "../../assets/data/currentUser.json"
import empData from "../../assets/data/employeesData.json"
import "./account.css"

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

  const formatHeader = (label) => {
    const words = label.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);
    const header = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    return words ? header : label;
  };

  return (
    <div className='account-container'>
      <Grid style={ { width: "100%" } }>
        <Grid.Column >
          <Table style={ { width: "500px" } }>
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
      </Grid>
    </div>
  )
}

export default Account