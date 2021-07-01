import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Arena from './components/Arena';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/arena" component={Arena}  />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
