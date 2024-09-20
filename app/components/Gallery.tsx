
import { Photo } from "react-photo-album"
import { v2 as cloudinary } from "cloudinary"
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

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
	<div>
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					<h1>Here we go again</h1>
					<div>

						<MasonryPhotoAlbum
							photos={photos}
						/>

					</div>
				</div>
			</main>
		</div>

	</div>
)
}


export default Gallery