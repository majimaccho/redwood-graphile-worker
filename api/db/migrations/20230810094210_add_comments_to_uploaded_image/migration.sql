-- This is an empty migration.

COMMENT ON TABLE public."UploadedImage" IS 'Image uploaded to S3';
COMMENT ON COLUMN public."UploadedImage".path IS 'S3 path to image';
