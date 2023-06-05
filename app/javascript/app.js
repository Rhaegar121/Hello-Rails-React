import {
    BrowserRouter, Route,
  } from 'react-router-dom';
  import Greeting from './Greeting';
  
  const App = () => (
    <BrowserRouter>
      <Route exact path="/" component={Greeting} />
    </BrowserRouter>
  );
  
  export default App;