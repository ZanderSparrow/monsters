import './App.css';

import { HashRouter, Route } from 'react-router-dom';

import Arena from './components/Arena';
import Landing from './components/Landing';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/arena" component={Arena}  />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
