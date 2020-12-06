import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import EggContainer from './components/EggContainer';
import HooksEggContainer from './components/HooksEggContainer';
import HooksChickenContainer from './components/HooksChickenContainer';
import NewEggContainer from './components/NewEggContainer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <EggContainer />
      <HooksEggContainer />
      <HooksChickenContainer />
      <NewEggContainer />
    </div>
  </Provider>
  );

export default App;
