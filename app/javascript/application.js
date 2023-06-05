// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/random_greeting')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
