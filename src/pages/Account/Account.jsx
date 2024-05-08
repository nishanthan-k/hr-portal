import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Loader, Table, TableBody } from "semantic-ui-react";
import { HrContext } from "../../contexts/HrContext/HrContext";
import "./Account.scss";

const Account = () => {
  const [userData, setUserData] = useState([]);
  const [onLoading, setOnLoading] = useState(true);
  const { hrId } = useContext(HrContext);
  // let userData = empData.employees.filter((user, index) => user.userName === currentUser[0].username);

  // console.log('header hrid', hrId);

  // useEffect(() => {
  //   axios.post("http://192.168.1.196:8080/hr/showHrDetails", {
  //     hrId: hrId
  //   })
  //     .then(res => {setUserData(res.data.data); setOnLoading(false)})
  // }, [hrId])

  // console.log(userData.dob, typeof userData.dob);

  // console.log(userData.dob.split(" ")[0]);
  // console.log(userData.dob.slice(0, 10));
  // const user = () => {
  //   let u = [];
  //   u.push(empData.employees[0])

  //   return u;
  // }

  // if (userData.length === 0) {
  //   userData = user();
  // }

  return (
    <div className="account-container">
      {onLoading ? (
        <div className="loader-container">
          <Loader active inline="centered" size="large" />
        </div>
      ) : (
        <div className="account-table-container">
          <Table unstackable striped selectable className="account-table">
            <TableBody>
              <Table.Row>
                <Table.Cell className="table-heading">EMPLOYEE ID</Table.Cell>
                <Table.Cell className="table-data">{`EMPH${userData.id}`}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">FIRST NAME</Table.Cell>
                <Table.Cell className="table-data">{userData.firstName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">LAST NAME</Table.Cell>
                <Table.Cell className="table-data">{userData.lastName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">FULL NAME</Table.Cell>
                <Table.Cell className="table-data">{userData.fullName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">DOB</Table.Cell>
                <Table.Cell className="table-data">{userData.dob}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">DOJ</Table.Cell>
                <Table.Cell className="table-data">{userData.doj}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">MOBILE NUMBER</Table.Cell>
                <Table.Cell className="table-data">{userData.phoneNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">EMAIL ADDRESS</Table.Cell>
                <Table.Cell className="table-data">{userData.emailAddress}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">USERNAME</Table.Cell>
                <Table.Cell className="table-data">{userData.userName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="table-heading">EXPERIENCE</Table.Cell>
                <Table.Cell className="table-data">{userData.exp}</Table.Cell>
              </Table.Row>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Account;
