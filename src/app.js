import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'


import SideNav from './components/SideNav'
import Contact from './components/Contact'



class App extends React.Component {



  render() {
    return (
      <div id="home">
        <SideNav />
        <div className="container main">
          <img id="main-logo" src="./sp-logo.svg" alt="Soul Ponies Logo" />
        </div>

        <Contact />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
