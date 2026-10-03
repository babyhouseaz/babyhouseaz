import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-full px-6 py-4 flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
            P
          </div>
          <span className="text-xl font-extrabold text-slate-800">Padora</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-6 font-semibold text-slate-600">
          <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="#" className="hover:text-primary transition-colors">Classes</Link>
          <Link href="#" className="hover:text-primary transition-colors">Teacher</Link>
          <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-primary transition-colors">Event</Link>
          <Link href="#" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>

        {/* Button */}
        <div>
          <Link href="#" className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-full font-bold transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
