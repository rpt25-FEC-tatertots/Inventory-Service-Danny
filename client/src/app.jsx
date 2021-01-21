import React from 'react'
import reactDOM from 'react-dom'
const axios = require('axios')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {sent: false}
  }
  componentDidMount() {
 axios.get('/inventory/56')
  .then(response => this.setState({item: response.data}))
  }
  render() {
    return (<div>Hello World! This is Inventory</div>)
  }
}
reactDOM.render(<App/>, document.getElementById('app'))