import type { Photo } from "react-photo-album"
import { v2 as cloudinary } from "cloudinary"

function assetLink(asset: string, width: number) {
	return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
}

async function getPhotos() {

	const fetchedPhotos = await cloudinary.search.expression('folder:portfolio/dreams').execute()
	console.log(fetchedPhotos)
	return fetchedPhotos
}

interface FetchedPhoto {
	asset_id: string;
	alt: string;
	width: number;
	height: number;
	display_name: string;
}

async function fetchPhotos() {
	const fetchedPhotos: FetchedPhoto[] = await getPhotos();
	return fetchedPhotos.map(({asset_id, alt, width, height, display_name}) => ({
		src: assetLink(asset_id, width),
		alt,
		width,
		height,
		display_name
	}));
}

async function loadPhotos() {
	const photos = await fetchPhotos();
	return photos;
}


export default loadPhotos;
