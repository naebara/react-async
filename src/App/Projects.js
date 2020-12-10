import React from "react";
import Tasklists from './Tasklists'

export default class Projects extends React.Component {
    render() {

        return this.props.projects.map(project => {
            return <ul key={project.id}>

                {project.name}
                <ul >
                    {
                        project.taskLists.map(
                            tasklist => <Tasklists key={tasklist.id} tl={tasklist} />
                        )
                    }
                </ul>
            </ul>
        })
    }
}