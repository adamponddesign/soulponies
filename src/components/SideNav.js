import React from 'react'



class SideNav extends React.Component {

  render() {
    return (


      <div className="sidenav">
        <a href="#home" id="sidenav-logo"><img src="./sp-logo.svg" alt="Soul Ponies Logo" /></a>
        <a href="#videos">Videos</a>
        <a href="#setlist">Example Setlist</a>
        <a href="#testimonials">Testimonials</a>
        <a href="https://www.instagram.com/soulponiesmusic/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#contact">Contact</a>

      </div>


    )
  }
}



export default SideNav
