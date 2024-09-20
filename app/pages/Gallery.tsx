
import Image from "next/image"
import { Photo } from "react-photo-album"
import { v2 as cloudinary } from "cloudinary"

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const Gallery = async () => {

	cloudinary.config({
		cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
		secure: true
	})
	const resources = await cloudinary.search.expression('folder:portfolio/dreams').execute()
	console.log(resources.resources[0])

	function assetLink(asset: string, width: number) {
		return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
	}



	return (
		<div>
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
				<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
					<div>
						<h1>Here we go again</h1>
						<div>
							<ul>
								{resources.resources.map((resource: { id: number; public_id: string; secure_url: string; width: number; height: number; display_name: string; blurDataURL: string }) => (
									<li key={resource.public_id}>
										<h3>{resource.display_name}</h3>
										<Image
											src={resource.secure_url}
											width={resource.width}
											height={resource.height}
											sizes="(max-width: 640px) 100vw,
											(max-width: 1280px) 50vw,
											(max-width: 1536px) 33vw,
											25vw"
											alt="Dreams"

										/>
									</li>
								)
								)}

							</ul>
						</div>
					</div>
				</main>
			</div>

		</div>
	)
}


export default Gallery