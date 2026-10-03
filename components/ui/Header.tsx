"use client";

import Link from "next/link";
import { useAuth } from "@/lib/context/AuthProvider";
import { useCart } from "@/lib/context/CartProvider";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { cartCount } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-[#0c1220] w-full px-8 py-4 border-b border-gray-700 flex items-center justify-between">
      <Link
        href="/"
        className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
      >
        <span className="text-[#0c1220] font-bold">logo</span>
      </Link>

      <nav
        className="
          hidden md:flex
          flex-row
          gap-6
          items-center
        "
      >
        <NavLinks
          isAuthenticated={isAuthenticated}
          cartCount={cartCount}
          login={login}
          logout={logout}
        />
      </nav>

      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <nav
          className="
            absolute
            top-full
            left-0
            w-full
            bg-[#0c1220]
            flex
            flex-col
            gap-6
            items-center
            py-8
            md:hidden
            z-40
          "
        >
          <NavLinks
            isAuthenticated={isAuthenticated}
            cartCount={cartCount}
            login={login}
            logout={logout}
            closeMenu={() => setIsMenuOpen(false)}
          />
        </nav>
      )}
    </header>
  );
};

function NavLinks({
  isAuthenticated,
  cartCount,
  login,
  logout,
  closeMenu = () => {},
}: any) {
  return (
    <>
      <Link
        href="/"
        onClick={closeMenu}
        className="font-medium text-gray-400 hover:text-white"
      >
        Home
      </Link>

      <Link
        href="/products"
        onClick={closeMenu}
        className="font-medium text-gray-400 hover:text-white"
      >
        Products
      </Link>

      {isAuthenticated && (
        <Link
          href="/cart"
          onClick={closeMenu}
          className="font-medium text-white flex items-center gap-2"
        >
          Cart
          <span className="px-2 py-1 text-xs rounded-full bg-[#c9893f] text-[#0c1220]">
            {cartCount || 0}
          </span>
        </Link>
      )}

      {isAuthenticated ? (
        <button
          onClick={() => {
            logout();
            closeMenu();
          }}
          className="font-medium text-gray-400 hover:text-white"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            login();
            closeMenu();
          }}
          className="font-medium text-gray-400 hover:text-white"
        >
          Login
        </button>
      )}
    </>
  );
}

export default Header;
