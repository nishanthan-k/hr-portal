import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Item } from "semantic-ui-react";
// import projectData from "../../assets/data/projectDetails.json";

const Projects = () => {
  const history = useHistory();
  const [projectData, setProjectData] = useState([]);

  const fetchDetails = (project) => {
    history.push("/projects/details", { project: project });
  };

  // useEffect(() => {
  //   axios.get("http://192.168.1.196:8080/project/listProject")
  //     .then(res => { setProjectData(res.data.data) })
  // }, [])

  // console.log(projectData);

  return (
    <div>
      <Item.Group divided>
        {projectData.map((project, index) => (
          <Item key={index} onClick={() => fetchDetails(project)}>
            <Item.Image size="small" src={project.src} onClick={() => fetchDetails(project)} />
            <Item.Content style={{ padding: "20px" }}>
              <Item.Header onClick={() => fetchDetails(project)}>{project.title}</Item.Header>
              <Item.Meta>{project.projectTeam}</Item.Meta>
              <Item.Description>{project.description}</Item.Description>
              <Item.Extra>Tech Stack : {project.techStack}</Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
};

export default Projects;
