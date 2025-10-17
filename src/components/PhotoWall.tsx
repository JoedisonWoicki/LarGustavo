import React from 'react';

interface PhotoWallProps {
  images: string[];
}

const PhotoWall: React.FC<PhotoWallProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {images.map((imageUrl, index) => (
        <div 
          key={index} 
          className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg group interactive-card animate-scale-in"
          style={{animationDelay: `${index * 0.05}s`}}
        >
          <img
            src={imageUrl}
            alt={`Galeria de Imagens ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-semibold">Imagem {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoWall;