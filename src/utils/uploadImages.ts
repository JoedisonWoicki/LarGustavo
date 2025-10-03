import { supabase } from '../lib/supabase';

export interface ImageMapping {
  [key: string]: string;
}

export async function createImagesBucket() {
  const bucketName = 'site-images';

  const { data: buckets } = await supabase.storage.listBuckets();

  const bucketExists = buckets?.some(b => b.name === bucketName);

  if (!bucketExists) {
    const { error } = await supabase.storage.createBucket(bucketName, {
      public: true,
      fileSizeLimit: 5242880,
      allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    });

    if (error) {
      console.error('Error creating bucket:', error);
      throw error;
    }
  }

  return bucketName;
}

export async function uploadImageFromUrl(imageUrl: string, fileName: string): Promise<string> {
  const bucketName = 'site-images';

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, blob, {
        contentType: blob.type,
        upsert: true
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  } catch (error) {
    console.error(`Error uploading ${fileName}:`, error);
    throw error;
  }
}

export async function uploadLocalImage(file: File): Promise<string> {
  const bucketName = 'site-images';

  try {
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, {
        contentType: file.type,
        upsert: true
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

export function getSupabaseImageUrl(fileName: string): string {
  const { data } = supabase.storage
    .from('site-images')
    .getPublicUrl(fileName);

  return data.publicUrl;
}
