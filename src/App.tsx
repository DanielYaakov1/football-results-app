import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './shared/components/Header';
import HomePage from './pages/home-page';
import VIDEOS from './shared/constants/videos';
import NotFound from './pages/not-found';
import RESOURCES from './shared/constants/resources';
import ROUTES from './shared/constants/routes';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  const routes = [
    {
      path: ROUTES.HOME_PAGE,
      name: RESOURCES.HEADER_TAB_HOME_TEXT,
      component: HomePage,
    },
    {
      path: ROUTES.ABOUT,
      name: RESOURCES.HEADER_TAB_ABOUT_TEXT,
      component: About,
    },
    {
      path: ROUTES.CONTACT,
      name: RESOURCES.HEADER_TAB_CONTACT_TEXT,
      component: Contact,
    },
  ];

  return (
    <div className='App'>
      <div className='video-container'>
        <video autoPlay muted loop>
          <source src={VIDEOS.FOOTBALL_HOMEPAGE} type='video/mp4' />
        </video>
      </div>
      <Router>
        <Header tabs={routes} />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
