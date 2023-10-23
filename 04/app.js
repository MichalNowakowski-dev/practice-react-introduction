import React from "react";
import { createRoot } from "react-dom/client";
import PropTypes from "prop-types";
const root = createRoot(document.querySelector("#root"));

const App = ({ text, number }) => {
  return <h1>{text}</h1>;
};

App.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

const num = 5;

root.render(<App text="sraka" number={5} />);
