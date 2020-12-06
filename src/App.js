import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import EggContainer from './components/EggContainer';
import HooksEggContainer from './components/HooksEggContainer';
import HooksChickenContainer from './components/HooksChickenContainer';
import NewEggContainer from './components/NewEggContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <ItemContainer egg />
      <ItemContainer />
      <EggContainer />
      <HooksEggContainer />
      <HooksChickenContainer />
      <NewEggContainer />
      <UserContainer />
    </div>
  </Provider>
  );

export default App;
