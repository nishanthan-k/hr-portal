import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Icon, Loader, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import { formatDate } from "../../commonFunctions/formatFunctions";
import "./Leave.scss";

const Leave = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [onLoading, setOnLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("http://192.168.1.196:8080/empLeave/listEmployeeLeave").then((res) => { setLeaveData(res.data.data); setOnLoading(false) })
  // }, []);

  const updateLeaveStatus = async (empId, leaveStatus) => {
    // try {
    //   await axios.post("http://192.168.1.196:8080/empLeave/updateLeaveStatus", {
    //     leaveId: empId,
    //     statusToUpdate: leaveStatus,
    //   });
    //   const updatedData = await axios.get("http://192.168.1.196:8080/empLeave/listEmployeeLeave");
    //   setLeaveData(updatedData.data.data);
    // } catch (error) {
    //   console.error("Error updating leave status:", error);
    // }
  };

  const runToast = (status) => {
    // console.log("toast 1");
    // console.log(status)
    if (status === "approved") {
      toast.success("Approved!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // // draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Declined", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "colored",
        icon: <Icon name="times circle" size="large" />,
      });
    }
    // console.log("toast 2");
  };

  return (
    <div className="table-container">
      <ToastContainer />

      {onLoading ? (
        <div className="loader-container">
          <Loader active inline="centered" size="large" />
        </div>
      ) : (
        <div fluid="false" className="leave-table-container">
          <Table className="leave-table" unstackable striped selectable>
            <TableHeader className="table-head">
              <TableRow className="table-head-row">
                <TableHeaderCell className="table-heading">EMPLOYEE ID</TableHeaderCell>
                <TableHeaderCell className="table-heading">FULL NAME</TableHeaderCell>
                <TableHeaderCell className="table-heading">START DATE</TableHeaderCell>
                <TableHeaderCell className="table-heading">END DATE</TableHeaderCell>
                <TableHeaderCell className="table-heading">REASON</TableHeaderCell>
                <TableHeaderCell className="table-heading">APPROVAL</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody className="table-body">
              {leaveData.map((user, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell className="">{user.id}</TableCell>
                  <TableCell className="">{user.fullName}</TableCell>
                  <TableCell className="">{formatDate(user.startDate)}</TableCell>
                  <TableCell className="">{formatDate(user.endDate)}</TableCell>
                  <TableCell className="">{user.reason}</TableCell>
                  {user.status === "in progress" ? (
                    <TableCell className="table-data button-data-item">
                      <Button
                        positive
                        content="Approve"
                        onClick={() => {
                          updateLeaveStatus(user.id, "approved");
                          runToast("approved");
                        }}
                      />
                      <Button
                        negative
                        content="Decline"
                        onClick={() => {
                          updateLeaveStatus(user.id, "declined");
                          runToast("declined");
                        }}
                      />
                    </TableCell>
                  ) : user.status === "approved" ? (
                    <TableCell className="table-data button-data-item">
                      <Button
                        positive
                        content="Approved"
                        className="status-changed"
                        onClick={() => {
                          updateLeaveStatus(user.id, "declined");
                          runToast("declined");
                        }}
                      />
                    </TableCell>
                  ) : (
                    <TableCell className="table-data button-data-item">
                      <Button
                        negative
                        content="Declined"
                        className="status-changed"
                        onClick={() => {
                          updateLeaveStatus(user.id, "approved");
                          runToast("approved");
                        }}
                      />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Leave;
