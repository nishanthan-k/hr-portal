import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const EmployeeModal = (props) => {
  const headings = ["Employee ID", "Role", "First Name", "Last Name", "Full Name", "DOB", "DOJ", "Mobile Number", "Email Address", "Username", "PASSWORD", "Photo", "Experience"]

  return (
    <div>
      <Modal open={ props.open }>
        <Modal.Content image>
          <Image size='medium' src={ props.selectedEmp.src } wrapped />
          <Modal.Description>
            <Header>{ props.selectedEmp.fullName }</Header>
            { Object.entries(props.selectedEmp).map((data, index) => (
              (data[0] !== "fullName" && data[0] !== "password" && (
                <p key={ data[0] }><span>{ headings[index] } : </span><span>{ data[1] }</span></p>
              ))
            )) }
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={ () => props.setOpen(false) }>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default EmployeeModal