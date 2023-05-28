import './App.css';
import HomePage from './pages/home-page';
import VIDEOS from './shared/constants/videos';

function App() {
  return (
    <div className='App'>
      <div className='video-container'>
        <video autoPlay muted loop>
          <source src={VIDEOS.FOOTBALL_HOMEPAGE} type='video/mp4' />
        </video>
      </div>
      <header className='App-header'>HEADER</header>
      <div className='content-wrapper'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
