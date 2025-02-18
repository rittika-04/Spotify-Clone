import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-[20%] min-w-[250px] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">
      {/* Home & Search Section */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around p-4">
        <div className="flex items-center gap-3 cursor-pointer" aria-label="Go to Home">
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 cursor-pointer" aria-label="Go to Search">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Your Library Section */}
      <div className="bg-[#121212] flex-1 rounded overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 cursor-pointer" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>

        {/* Create Playlist Section */}
        <section className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col gap-1">
          <h1>Create Your First Playlist</h1>
          <p className="font-light text-sm">It's easy, we will help you</p>
          <button className="px-4 py-2 bg-white text-black text-sm rounded-full mt-4">
            Create Playlist
          </button>
        </section>

        {/* Podcast Section */}
        <section className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col gap-1">
          <h1>Let's Find Some Podcasts to Follow</h1>
          <p className="font-light text-sm">We will keep you updated on new episodes</p>
          <button className="px-4 py-2 bg-white text-black text-sm rounded-full mt-4">
            Browse Podcasts
          </button>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
