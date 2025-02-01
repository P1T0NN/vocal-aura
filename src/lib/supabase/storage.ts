export const getStorageUrl = (path: string) => {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    return `${SUPABASE_URL}/storage/v1/object/public/vocal-aura-prod/${path}`;
};