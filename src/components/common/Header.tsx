import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Keeping import though unused in current logic just in case, or remove if not needed. Actually original didn't use it, just imported it. I'll keep it.
import { Menu, X } from "lucide-react";

interface HeaderProps {
  variant?: "dark" | "light";
  inside?: boolean;
}

const Header = ({ variant = "dark", inside }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isDark = variant === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed z-[1000] top-0 left-0 w-full right-0 px-4 transition-all duration-500 ease-in-out
         ${
           isScrolled
             ? "bg-white/80 backdrop-blur-md shadow-sm py-4 block"
             : isDark
               ? "bg-[#020617] pt-[2.50rem] pb-8"
               : "bg-transparent pt-[2.50rem] pb-8"
         } ${isScrolled ? "text-black" : isDark ? "text-white" : "text-black"}`}
    >
      <div className="max-w-[95rem] mx-auto">
        {inside && (
          <img
            src="/assets/solutions/session1/gr.png"
            alt=""
            className="w-full absolute top-0 left-0"
          />
        )}

        <nav className="relative z-10 mx-auto flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <Link to="/">
              <img
                data-aos="zoom-in"
                src="/assets/logo.png"
                alt="Logo"
                className="h-8 w-16 md:w-24 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center space-x-8 text-sm font-medium ${
              isScrolled ? "text-black" : isDark ? "text-white" : "text-black"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const baseColor = isScrolled
                ? "text-black"
                : isDark
                  ? "text-white"
                  : "text-black";

              return (
                <a
                  data-aos="fade-down"
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 font-semibold text-[16px] relative group ${
                    isActive
                      ? "font-bold text-[#1763FA]"
                      : `${baseColor} hover:text-[#1763FA]`
                  }`}
                >
                  {link.name}
                  {/* <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#1763FA] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                /> */}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isDark ? (
              <button
                data-aos="zoom-in"
                className={`px-8 py-3 font-medium rounded-full text-[16px] transition ${
                  isScrolled
                    ? "bg-black text-white hover:bg-gray-800"
                    : isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Request Demo
              </button>
            ) : (
              <>
                <button
                  className={`text-[16px] font-medium transition ${
                    isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "text-black hover:text-gray-800"
                  }`}
                >
                  Sign Up
                </button>
                <button
                  className={`w-[140px] py-3 rounded-full text-[16px] font-medium transition ${
                    isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#1763FA] text-white hover:bg-[#1763FA]/90"
                  }`}
                >
                  Login
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 focus:outline-none ${
                isScrolled ? "text-black" : isDark ? "text-white" : "text-black"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-white shadow-xl md:hidden animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col p-6 space-y-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-medium transition-colors ${
                        isActive
                          ? "text-[#1763FA]"
                          : "text-black hover:text-[#1763FA]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="h-px bg-gray-100 w-full" />

              <div className="flex flex-col gap-3">
                {isDark ? (
                  <button className="w-full bg-black text-white px-8 py-3 rounded-full text-sm hover:bg-gray-800 transition font-semibold">
                    Request Demo
                  </button>
                ) : (
                  <>
                    <button className="w-full bg-white text-black border border-gray-200 px-8 py-3 rounded-full text-sm hover:bg-gray-50 transition font-medium">
                      Sign Up
                    </button>
                    <button className="w-full bg-[#1763FA] text-white px-8 py-3 rounded-full text-sm hover:bg-[#1763FA]/90 transition font-medium">
                      Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
