import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <img id="main-logo" src="./sp-logo.svg" alt="Soul Ponies Logo" />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
