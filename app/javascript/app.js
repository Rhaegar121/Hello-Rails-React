import {
  BrowserRouter, Route,
} from 'react-router-dom';
import Greeting from './greeting';

const App = () => (
  <BrowserRouter>
    <Route path="/" element={<Greeting />} />
  </BrowserRouter>
);

export default App;
