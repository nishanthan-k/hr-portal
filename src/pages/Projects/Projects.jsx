import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import projectData from "../../assets/data/projectDetails.json";

const Projects = () => {
  const navigate = useNavigate();

  const fetchDetails = (project) => {
    console.log("fetch details")
    navigate("/projects/details", {state: {project: project}})
  }

  return (
    <div>
      {/* <Grid style={ { width: "100vw" } }> */}
        {/* <Grid.Column style={ { width: "88%", padding: "20px" } }> */}
          <Item.Group divided >

            { projectData.map((project, index) => (
              <Item key={ index }  onClick={() => fetchDetails(project) }  >
                <Item.Image size='small' src={ (project.src) } onClick={() => fetchDetails(project) } />
                <Item.Content style={ { padding: "20px" } }>
                  <Item.Header onClick={() => fetchDetails(project) }>{ project.title }</Item.Header>
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
        {/* </Grid.Column> */}
      {/* </Grid> */}
    </div>
  )
}

export default Projects