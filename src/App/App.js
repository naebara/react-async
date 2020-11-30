import React from "react";
import Projects from './Projects'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  async componentDidMount() {
    const projectsResponse = await fetch('https://app.paymoapp.com/api/projects', {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      },
    })

    const projects = (await projectsResponse.json()).projects

    this.setState({projects})
  }

  render() {
      return <Projects projects={this.state.projects}/>
  }
}
export default App;
