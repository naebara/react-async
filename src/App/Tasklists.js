import React from "react";
import Tasks from "./Tasks"

export default class Tasklists extends React.Component {


    render() {
        return <li>
            {this.props.tl.name}
            <ul>
                {
                    this.props.tl.tasks.map(
                        taskItem => <Tasks key={taskItem.id} ts={taskItem} />
                    )
                }
            </ul>
        </li>
    }
}

