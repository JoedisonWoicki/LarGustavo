/*
  # Create Site Images Storage Bucket

  1. Storage Setup
    - Creates a public bucket named 'site-images'
    - Configured for public access to allow images to be displayed on the website
    - File size limit: 5MB per file
    - Allowed file types: JPEG, PNG, GIF, WebP

  2. Security
    - Public bucket allows read access to everyone
    - Insert/upload allows public access for ease of use
    - Update and delete require authentication

  3. Policies
    - Public read access for all images
    - Public can upload images
    - Authenticated users can update/delete images
*/

-- Create the storage bucket for site images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'site-images',
  'site-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DO $$
BEGIN
  DROP POLICY IF EXISTS "Public read access for site images" ON storage.objects;
  DROP POLICY IF EXISTS "Public can upload site images" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can update images" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;
END $$;

-- Allow public read access to all images in the bucket
CREATE POLICY "Public read access for site images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'site-images');

-- Allow public to upload images
CREATE POLICY "Public can upload site images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'site-images');

-- Allow authenticated users to update images
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'site-images')
WITH CHECK (bucket_id = 'site-images');

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'site-images');
