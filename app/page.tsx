

import Image from "next/image"
import { v2 as cloudinary } from "cloudinary"
import Gallery from './components/Gallery'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})



export default async function Home() {
  const resources = await cloudinary.search.expression('folder:portfolio/dreams').execute()
  console.log(resources.resources[0].secure_url)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3> gallery? </h3>
        <Gallery />
    </main>
    </div>
  );
}
