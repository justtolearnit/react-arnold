import AllMeetupsPage from './components/pages/AllMeetupsPage';
import Favorites from './components/pages/Favorites';
import NewMeetUpsPage from './components/pages/regardingMeetup/NewMeetupsPage';

import { Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';


function App() {
  return (
  <Layout>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>

      <Route path='/new-meetups'>
        <NewMeetUpsPage />
      </Route>

      <Route path='/favorites'>
        <Favorites />
      </Route>
    </Layout>
  );
}
export default App;

