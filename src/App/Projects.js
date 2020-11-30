import React from "react";

export default class Projects extends React.Component {
	render() {
	  const projectsList = this.props.projects.map( project => {
		return <div key={project.id}>{project.name}</div>
	  })
	  return <div>{projectsList}</div>
	}
}