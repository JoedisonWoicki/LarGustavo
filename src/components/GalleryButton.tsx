import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';

const GalleryButton: React.FC = () => {
  return (
    <Link
      to="/galeria"
      className="btn-gradient text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover-lift"
    >
      <Image size={20} />
      <span>Ver Galeria</span>
    </Link>
  );
};

export default GalleryButton;