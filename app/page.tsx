

import { v2 as cloudinary } from "cloudinary"
import Gallery from '../components/Gallery'





export default async function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3> gallery? </h3>
        <Gallery />
    </main>
    </div>
  );
}
