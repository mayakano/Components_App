// import projects from '../data/projects.json';

import React, { Component } from 'react';
import Project from "./Project.js";
import projects from '../data/projects.json';

class Projects extends Component {
  constructor(imgName,title,description) {
    super(),
    this.state = {
      complete: projects.allProjects
    }
  }
  render() {
    return(
      <div> {
      this.state.complete.map((e) => {
        return <Project
        imgName = {e.imgName}
        title = {e.title}
        description = {e.description} />
      })}
      </div>

    )
  }
}


export default Projects;