import {Route, Routes} from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import Page404 from './pages/Page404/Page404';
import SingUpPage from './pages/SingUpPage/SingUpPage';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import TimerPage from './pages/TimerPage/TimerPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TimerPage />} />
      <Route path='/statistic' element={<StatisticPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registration' element={<SingUpPage />} />
      <Route path='/*' element={<Page404 />} />
    </Routes>
  );
}

export default App;
