import React from 'react'

// class Contact extends React.Component {
//   render(){
//     return (
//       <div>
//         <p>For all enquires please contact</p>
//
//         <a href="mailto:info@soulponies.co.uk" target="_blank" rel="noopener noreferrer">
//           <span>info@soulponies.co.uk</span>
//         </a>
//
//       </div>
//     )
//   }
// }
//
// export default Contact


const Contact = (props) => {
  return(
    <div id="contact">
      <p>For all enquires please contact</p>

      <a href="mailto:info@soulponies.co.uk" target="_blank" rel="noopener noreferrer">
        <span>info@soulponies.co.uk</span>
      </a>

    </div>
  )
}

export default Contact
