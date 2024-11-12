

import { v2 as cloudinary } from "cloudinary"
import Gallery from '../components/Gallery'
import Hero from "@/components/landing/Hero"





export default async function Home() {

  return (
    <div className="">
      <main className="">
        <Hero />
        <h3> gallery? </h3>
        <Gallery />
    </main>
    </div>
  );
}
