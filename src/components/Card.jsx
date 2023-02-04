// import React, { Component } from "react";

// class Card extends Component {
//   render() {
//     return (
//       <>
//         <div className="bg-light-green dib br3 pa3 ma2 grow">
//           <img alt="robot" src="https://robohash.org/test?200x200"></img>
//           <h2>{this.props.name}</h2>
//           <p>{this.props.email}</p>
//         </div>
//       </>
//     );
//   }
// }

// export default Card;

import React from "react";

export default function Card(props) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      <img alt="robot" src={`https://robohash.org/${props.id}200x200"`}></img>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}
