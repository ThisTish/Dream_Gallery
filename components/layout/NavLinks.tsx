'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = () => {

const router = usePathname()

const navLinks = [
	{ name: 'home', path: '/' },
	{ name: 'about', path: '/about' },
	{ name: 'portfolio', path: '/services' },
	{ name: 'contact', path: '/contact' },
	{ name: 'resume', path: '/resume' },
]

	return (
		<>
		{navLinks.map((link, index) =>(
			<Link 
			key={index} 
			href={link.path}
			className={router === link.path ? 'font-extrabold' : 'font-normal'}
			>
				{link.name}
			</Link>
		))}

		</>
	)
}

export default NavLinks