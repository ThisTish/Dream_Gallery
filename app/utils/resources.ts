// 'use client'

// import { v2 as cloudinary } from "cloudinary"

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true
// })
// if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
//   throw new Error("Missing Cloudinary environment variables");
// }


// export default async function fetchResources() {
//   const resources = await cloudinary.search.expression('folder:portfolio/dreams').execute()
//   console.log(resources.resources[0].secure_url)
// }

