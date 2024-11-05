

import Link from "next/link"
import NavLinks from "./NavLinks";

const NavBar = () => {
	return (
		<div>
			<nav className="flex justify-between px-9 items-center h-16 bg-white text-black font-mono" role="navigation">
				<Link href="/" className=" font-black">Tish Sirface</Link>
				<div className="space-x-7 md:block hidden">
					<NavLinks />
				</div>
				<div className="md:hidden">
					<div className="h-2 w-7 bg-black space-y-3 border-2 border-white "></div>
					<div className="h-2 w-7 bg-black space-y-3 border-2 border-white "></div>
					<div className="h-2 w-7 bg-black space-y-3 border-2 border-white "></div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;