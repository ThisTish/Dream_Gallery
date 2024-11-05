

import { Photo } from "react-photo-album"
import { v2 as cloudinary } from "cloudinary"
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true
	})

const Gallery = async () => {

	const resources = await cloudinary.search.expression('folder:portfolio/dreams').execute()
	const photos = resources.resources.map(
		({ secure_url, alt, width, height, display_name }: { secure_url: string, alt: string, width: number, height: number, display_name: string }) => 
			({
		src: secure_url,
		alt,
		width,
		height,
		display_name,
		srcSet: breakpoints.map((breakpoint) => ({
			src: secure_url, breakpoint,
			width: breakpoint,
			height: Math.round((height / width) * breakpoint),
		})),
	}) as Photo
)

return (
	<>
		<>
			<main className="max-w-5xl">
					<h1>Here we go again</h1>

						<MasonryPhotoAlbum
							photos={photos}
							spacing={13}
						/>

			</main>
		</>

	</>
)
}


export default Gallery