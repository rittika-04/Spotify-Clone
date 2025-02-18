import React from 'react';
import Sidebar from './components/Sidebar'; 
import Player from './components/Player';
import Display from './components/Display';

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with fixed width */}
        <div className="w-[20%] min-w-[250px] bg-[#121212]">
          <Sidebar />
        </div>

        {/* Display takes remaining space */}
        <div className="flex-1">
          <Display />
        </div>
      </div>

      {/* Player at the bottom */}
      <div className="h-[10%]">
        <Player />
      </div>
      <audio preload='auto'></audio>
    </div>
  );
};

export default App;
