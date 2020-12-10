import React from "react";
import Projects from './Projects'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  componentDidMount() {

    let projectsPromise = fetch("https://app.paymoapp.com/api/projects/", {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    }).then((res) => res.json());

    // Get all Tasklists
    let taskListsPromise = fetch("https://app.paymoapp.com/api/tasklists/", {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    }).then((res) => res.json());

    // Get all Tasks
    let tasksPromise = fetch("https://app.paymoapp.com/api/tasks/", {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    }).then((res) => res.json());

    Promise.all([projectsPromise, taskListsPromise, tasksPromise])
      .then(([projectsObject, taskListsObject, tasksObject]) => {
        let finalResult = [];

        projectsObject.projects.forEach((element) => {
          let task_lists = taskListsObject.tasklists
            .filter((taskListElement) => taskListElement.project_id == element.id)
            .map((taskListElement) => {
              return {
                name: taskListElement.name,
                tasks: tasksObject.tasks
                  .filter(
                    (taskElement) =>
                      taskElement.project_id == element.id &&
                      taskElement.tasklist_id == taskListElement.id
                  )
                  .map((e) => e.name),
              };
            });

          let project = {
            name: element.name,
            taskLists: task_lists,
          };
          finalResult.push(project);
        });
        return Promise.resolve(finalResult);
      }).then((projects) => {
        this.setState({ projects })
      })
  }


  render() {
    return <Projects projects={this.state.projects
    } />

  }
}
export default App;
