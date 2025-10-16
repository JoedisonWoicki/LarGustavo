import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials');
  console.error('VITE_SUPABASE_URL:', supabaseUrl);
  console.error('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'present' : 'missing');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function uploadImages() {
  const bucketName = 'site-images';

  console.log('Checking if bucket exists...');
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();

  if (listError) {
    console.error('Error listing buckets:', listError);
  }

  const bucketExists = buckets?.some(b => b.name === bucketName);

  if (bucketExists) {
    console.log('Bucket already exists, proceeding with upload...');
  } else {
    console.log('Bucket does not exist. Please ensure the migration has been run.');
  }

  const publicDir = join(__dirname, 'public');
  const files = readdirSync(publicDir).filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  console.log(`Found ${files.length} images to upload`);

  const uploadedUrls = {};

  for (const file of files) {
    try {
      const filePath = join(publicDir, file);
      const fileBuffer = readFileSync(filePath);

      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(file, fileBuffer, {
          contentType: file.endsWith('.png') ? 'image/png' :
                      file.endsWith('.jpg') || file.endsWith('.jpeg') ? 'image/jpeg' :
                      'image/webp',
          upsert: true
        });

      if (error) {
        console.error(`Error uploading ${file}:`, error);
        continue;
      }

      const { data: publicUrlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(file);

      uploadedUrls[file] = publicUrlData.publicUrl;
      console.log(`✓ Uploaded: ${file}`);
    } catch (err) {
      console.error(`Failed to upload ${file}:`, err);
    }
  }

  console.log('\n=== Upload Complete ===');
  console.log('Uploaded URLs:');
  console.log(JSON.stringify(uploadedUrls, null, 2));

  return uploadedUrls;
}

uploadImages().catch(console.error);
