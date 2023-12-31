import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="space-x-4">
          <Link href="#" className="text-white hover:text-gray-300">Home    </Link>
          <Link href="#" className="text-white hover:text-gray-300">About   </Link>
          <Link href="#" className="text-white hover:text-gray-300">Services</Link>
          <Link href="#" className="text-white hover:text-gray-300">Contact </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
