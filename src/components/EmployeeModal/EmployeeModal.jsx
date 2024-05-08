import React, { useState } from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import { formatExp } from "../../commonFunctions/formatFunctions";
import EditModal from "../EditModal/EditModal";
import "./EmployeeModal.scss";

const EmployeeModal = (props) => {
  const [openEdit, setOpenEdit] = useState(false);
  // const [modal, setModal] = useState([props.selectedEmp]);

  const setModalData = (newEmpList) => {
    // console.log("--------------------setModalData--------------", newEmpList)
    props.setSelectedEmp(newEmpList);
  };

  const handleEditClick = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
    props.setOpen(false);
  };

  // useEffect(() => {
  // 	console.log('use effect in EmployeeModal')
  // }, [filteredEmp])

  return (
    <div>
      <Modal open={props.open}>
        <Modal.Content image>
          <Image size="medium" src={props.selectedEmp.src} wrapped />
          <Modal.Description>
            <p>
              <span className="emp-detail-heading">Employee ID</span>
              <span className="emp-detail-value">{`EMP${props.selectedEmp.empID}`}</span>
            </p>
            <p>
              <span className="emp-detail-heading">Employee Name</span>
              <span className="emp-detail-value">{props.selectedEmp.fullName}</span>
            </p>
            <p>
              <span className="emp-detail-heading">Role</span>
              <span className="emp-detail-value">{props.selectedEmp.role}</span>
            </p>
            <p>
              <span className="emp-detail-heading">Experience</span>
              <span className="emp-detail-value">{formatExp(props.selectedEmp.exp)}</span>
            </p>
            <p>
              <span className="emp-detail-heading">DOB</span>
              <span className="emp-detail-value">{props.selectedEmp.dob}</span>
            </p>
            <p>
              <span className="emp-detail-heading">DOJ</span>
              <span className="emp-detail-value">{props.selectedEmp.doj}</span>
            </p>
            <p>
              <span className="emp-detail-heading">Mobile Number</span>
              <span className="emp-detail-value">{props.selectedEmp.phoneNumber}</span>
            </p>
            <p>
              <span className="emp-detail-heading">Username</span>
              <span className="emp-detail-value">{props.selectedEmp.userName}</span>
            </p>
            <p>
              <span className="emp-detail-heading">Email Address</span>
              <span className="emp-detail-value">{props.selectedEmp.emailAddress}</span>
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={handleEditClick}>
            Edit
          </Button>
          <Button primary onClick={handleClose}>
            It's OK
          </Button>
        </Modal.Actions>
      </Modal>

      {openEdit && <EditModal openEdit={openEdit} setOpenEdit={setOpenEdit} selectedEmp={props.selectedEmp} filteredEmp={props.filteredEmp} setFilteredEmp={props.setFilteredEmp} setModalData={setModalData} updatedEmployeeList={props.updatedEmployeeList} />}
    </div>
  );
};

export default EmployeeModal;
