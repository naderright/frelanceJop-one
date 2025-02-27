/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // تفعيل Static Export
    images: {
      unoptimized: true, // لمنع مشاكل الصور
    },
};

export default nextConfig;
