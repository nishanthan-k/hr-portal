import React from 'react'
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

  return (
    <div className='account-container'>
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