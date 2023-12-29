import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const EmployeeModal = (props) => {
  return (
    <div>
      <Modal open={ props.open }>
          <Modal.Content image>
            <Image size='medium' src={ props.selectedEmp.src } wrapped />
            <Modal.Description>
              <Header>{ props.selectedEmp.fullName }</Header>
              { Object.entries(props.selectedEmp).map((data, value) => (
                (data[0] !== "fullName" && data[0] !== "password" && (
                  <p key={data[0]}><span>{ data[0] } : </span>{ data[1] }</p>
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