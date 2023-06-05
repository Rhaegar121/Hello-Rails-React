import {
    BrowserRouter, Route,
  } from 'react-router-dom';
import Greeting from './greeting';
  
  const App = () => (
    <BrowserRouter>
      <Route exact path="/" component={Greeting} />
    </BrowserRouter>
  );
  
  export default App;