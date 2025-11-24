import { Link } from 'react-router-dom';
import { Menu, X, Home, PenSquare, LogIn } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            The Kop Stories
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem to="/" icon={<Home size={20} />} label="Home" />
            <NavItem to="/feed" icon={<PenSquare size={20} />} label="Stories" />
            <NavItem to="/login" icon={<LogIn size={20} />} label="Login" />

            <Link
              to="/signup"
              className="bg-white text-red-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileItem to="/" label="Home" icon={<Home size={20} />} />
            <MobileItem to="/feed" label="Stories" icon={<PenSquare size={20} />} />
            <MobileItem to="/login" label="Login" icon={<LogIn size={20} />} />

            <Link
              to="/signup"
              className="block w-full text-left px-3 py-2 bg-white text-red-700 rounded font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 hover:bg-red-800 px-3 py-2 rounded transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function MobileItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-red-800 rounded"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
