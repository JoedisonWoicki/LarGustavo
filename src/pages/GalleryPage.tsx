import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { getSupabaseImageUrl } from '../utils/uploadImages';
import PhotoWall from '../components/PhotoWall';
import { Image } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.storage.from('site-images').list('', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
        });

        if (error) {
          throw error;
        }

        const urls = data
          .filter((file) => file.name !== '.emptyFolderPlaceholder') // Filter out placeholder
          .map((file) => getSupabaseImageUrl(file.name));
        setImageUrls(urls);
      } catch (err) {
        console.error('Error fetching images:', err);
        setError('Não foi possível carregar as imagens da galeria.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black gradient-text mb-4 tracking-tight animate-fade-in-up">
            Nossa Galeria
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore momentos especiais e o dia a dia acolhedor do Lar Gustavo Nordlund.
            Cada imagem conta uma história de carinho, cuidado e alegria.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="loading-spinner"></div>
          </div>
        )}

        {error && (
          <div className="text-center text-red-400 text-lg p-8 glass-dark rounded-xl">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && imageUrls.length === 0 && (
          <div className="text-center text-slate-400 text-lg p-8 glass-dark rounded-xl">
            <p>Nenhuma imagem encontrada na galeria.</p>
          </div>
        )}

        {!loading && !error && imageUrls.length > 0 && (
          <PhotoWall images={imageUrls} />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;