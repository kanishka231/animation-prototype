import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          NeevHQ
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#" className="text-gray-600 hover:text-blue-600">About</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

