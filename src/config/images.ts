const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const STORAGE_BUCKET = 'site-images';

export function getImageUrl(filename: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${filename}`;
}

export const IMAGES = {
  logo: getImageUrl('logotipo_lar.jpg'),
  // Usando o URL direto do Google Drive para o QR Code do PIX, conforme o guia de upload,
  // para garantir que a imagem seja carregada corretamente.
  pixQr: 'https://drive.google.com/uc?export=view&id=1MVNQle8M2opLzfsAI5NNE6jujgzpEFlj',
  hero: getImageUrl('captura_tela_2025-07-16.png'),
  supporters: {
    apoiador1: getImageUrl('01J2BW8W8WWSPYQPVF9YGZ6B8Z.jpg'),
    aelSistemas: getImageUrl('ael_sistemas_logo.jpeg'),
    apoiador2: getImageUrl('whatsapp_2025-06-18_11-04-22.jpg'),
    apoiador3: getImageUrl('whatsapp_2025-06-18_10-42-15.jpg'),
    madaDoces: getImageUrl('mada_doces.jpg'),
    apoiador4: getImageUrl('whatsapp_2025-06-18_11-04-40.jpg'),
    apoiador5: getImageUrl('image.jpg'),
    apoiador6: getImageUrl('whatsapp_2025-06-18_10-01-57.jpg'),
    frigelar: getImageUrl('logo_frigelar_QERmNQ.png'),
    pestanaLeiloes: getImageUrl('pestana_leiloes_logo.jpeg'),
    apoiador7: getImageUrl('whatsapp_2025-06-18_10-02-23.jpg'),
  }
} as const;