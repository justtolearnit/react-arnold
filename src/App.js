import AllMeetupsPage from './components/pages/AllMeetupsPage';
import Favorites from './components/pages/Favorites';
import NewMeetUpsPage from './components/pages/NewMeetupsPage';
import MainNavigation from './components/layouts/MainNavigation'

import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <MainNavigation />
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>

      <Route path='/new-meetups'>
        <NewMeetUpsPage />
      </Route>

      <Route path='/favorites'>
        <Favorites />
      </Route>
    </div>
  );
}
export default App;

