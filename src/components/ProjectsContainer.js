import React, { Component } from 'react';
import axios from 'axios';

class ProjectsContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			lists: []
		}
	}

	componentDidMount() {
		axios.get('api/v1/lists.json')
		.then(response => {
			console.log(response)
			this.setState({
				lists: response.data
			})
		})
		.catch(error => console.log(error))
	}

	render() {
		return (
			<div className="projects-container">
			   <h3> Lista de Projetos </h3>
				{this.state.lists.map( list => {
					return (
						<div className="single-list" key={list.id}>
							<h4>{list.title}</h4>
							<p>{list.excerpt}</p>
						</div>
					)
				})}
			</div>
		)
	}
}
		
export default ProjectsContainer;