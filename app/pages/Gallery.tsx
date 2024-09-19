import React from 'react'
import Image from "next/image"
import { v2 as cloudinary } from "cloudinary"
const Gallery = async () => {
	cloudinary.config({
		cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_API_SECRET,
		secure: true
	})
	const resources = await cloudinary.search.expression('folder:portfolio/dreams').execute()
	console.log(resources.resources[0].secure_url)
	return (
		<div>

			
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
				<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
					<div>
						<h1>Here we go again</h1>
						<div>
							<ul>
								{resources.resources.map((resource: { public_id: string; secure_url: string; width: number; height: number; display_name: string }) => (
									<li key={resource.public_id}>
										<h3>{resource.display_name}</h3>
										<Image src={resource.secure_url} width={resource.width} height={resource.height} alt="Dreams" />
									</li>
								)
								)}
								<li>
									<Image src={resources.resources[0].secure_url} width={resources.resources[0].width} height={resources.resources[0].height} alt="Dreams" />

								</li>
							</ul>
						</div>
					</div>
				</main>
			</div>
			
		</div>
	)
}

export default Gallery