import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors"
    >
      {/* Image with fixed dimensions */}
      <img
        className="rounded w-full h-auto object-cover"
        src={image}
        alt={name} // Accessibility fix
      />
      
      {/* Album name and description */}
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm truncate">{desc}</p> {/* Truncate long descriptions */}
    </div>
  );
};

export default AlbumItem;
