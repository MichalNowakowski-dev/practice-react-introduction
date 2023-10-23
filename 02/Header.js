import React from "react";

// export class Header extends React.Component {
//   render() {
//     return <header>{this.props.text}</header>;
//   }
// }

const style = {
  color: "green",
  fontSize: "33px",
  fontFamily: "sans-serif",
  fontWeight: "bold",
};

export const Header = ({ text }) => {
  return <header style={style}>{text}</header>;
};
