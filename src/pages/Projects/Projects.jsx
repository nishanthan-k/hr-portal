import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import projectData from "../../assets/data/projectDetails.json";

const Projects = () => {
  const navigate = useNavigate();

  const fetchDetails = (project) => {
    navigate("/projects/details", { state: { project: project } })
  }

  return (
    <div>
      <Item.Group divided >
        { projectData.map((project, index) => (
          <Item key={ index } onClick={ () => fetchDetails(project) }  >
            <Item.Image size='small' src={ (project.src) } onClick={ () => fetchDetails(project) } />
            <Item.Content style={ { padding: "20px" } }>
              <Item.Header onClick={ () => fetchDetails(project) }>{ project.title }</Item.Header>
              <Item.Meta>
                { project.projectTeam }
              </Item.Meta>
              <Item.Description>
                { project.description }
              </Item.Description>
              <Item.Extra>
                Tech Stack : { project.techStack }
              </Item.Extra>
            </Item.Content>
          </Item>
        )) }

      </Item.Group>
    </div>
  )
}

export default Projects