

import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const App = () => {
  return (
    <nav>
      <ul>
        <MenuItem text="start" url="/" />
        <MenuItem text="galeria" url="/gallery" />
        <MenuItem text="kontakt" url="/contact" />
      </ul>
    </nav>
  );
};



ReactDOM.render(<App />, document.getElementById('root'));
