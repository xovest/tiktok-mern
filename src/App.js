import { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './components/VideoCard';

function App() {
  const [tiktoks, setTiktoks] = useState([])
  
  return (
    <div className="App">
      <div className='top'>
        <img className='logo' src='https://instagram-image-from-wiki.png' alt='insta' />
        <h1>tiktoks</h1>
      </div>
      {/* also had to go for that firebase firestore and create db but i was too lazy to do it and it's not hte first time i do this lol */}
      <div className='videos'>
        {tiktoks.map(({channel, avatar, song, url, likes, shares}) => (
          <VideoCard 
            channel={channel}
            avatar={avatar}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
