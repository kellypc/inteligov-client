import React, { Component } from 'react';
import axios from 'axios';

class ProjectsContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			projects: []
		}
	}

	componentDidMount() {
		axios.get('api/v1/projects.json')
		.then(response => {
			console.log(response)
			this.setState({
				projects: response.data
			})
		})
		.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="projects-container">
			   <h3> Lista de Projetos </h3>
				{this.state.projects.map( project => {
					return (
						<div className="single-project" key={project.id}>
							<h4>{project.title}</h4>
							<p>{project.excerpt}</p>
						</div>
					)
				})}
			</div>
		)
	}
}

export default ProjectsContainer;
