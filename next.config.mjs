/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/dnvibzwty/**",
            },
            {
                protocol: "https",
                hostname: "assets.react-photo-album.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
