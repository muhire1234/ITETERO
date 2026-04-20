import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const navLinks = [
    { label: "Home", href: "#home", route: "/" },
    { label: "Our Activities", href: "#activities", route: "/" },
    { label: "About Us", href: "#about", route: "/" },
    { label: "Menu", href: "#menu", route: "/menu" },
    { label: "Gallery", href: "#gallery", route: "/gallery" },
    { label: "Contact", href: "#contact", route: "/" },
];

// 🔹 Reusable NavLink
function CustomNavLink({ link, active, onClick }) {
    const id = link.href.replace("#", "");

    if (link.route !== "/") {
        return (
            <NavLink
                to={link.route}
                className={({ isActive }) =>
                    `relative text-sm transition-all duration-200 ${isActive || active === id
                        ? "text-[#7B3F00] font-semibold"
                        : "text-[#5C2E00] hover:text-[#7B3F00]"
                    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#7B3F00] after:transition-all after:duration-300 ${isActive || active === id
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }`
                }
            >
                {link.label}
            </NavLink>
        );
    }

    return (
        <a
            href={link.href}
            onClick={onClick}
            className={`relative text-sm transition-all duration-200
      ${active === id
                    ? "text-[#7B3F00] font-semibold"
                    : "text-[#5C2E00] hover:text-[#7B3F00]"
                }
      after:absolute after:left-0 after:-bottom-1 after:h-[2px]
      after:bg-[#7B3F00] after:transition-all after:duration-300
      ${active === id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
        >
            {link.label}
        </a>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    // 🔹 Scroll effects (shadow + progress)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            setScrolled(scrollY > 20);
            setProgress((scrollY / height) * 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔹 Section detection
    useEffect(() => {
        const sections = navLinks.map((link) =>
            document.querySelector(link.href)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // 🔹 Smooth scroll (no CSS needed)
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
            return;
        }

        navigate(`/${href}`);
        setIsOpen(false);
    };

    return (
        <>
            {/* 🔥 Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 h-[3px] bg-[#7B3F00] z-[60] transition-all"
                style={{ width: `${progress}%` }}
            />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
                        ? "bg-[#FDF6EC] shadow-md shadow-[#7B3F00]/10 h-24"
                        : "bg-[#FDF6EC]/90 backdrop-blur-sm h-24"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
                    {/* Logo */}
                    <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Coffee logo"
                            className="w-50 h-50 object-contain"
                        />

                    </a>

                    {/* Desktop */}
                    <ul className="hidden md:flex gap-7">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <CustomNavLink
                                    link={link}
                                    active={active}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1"
                    >
                        <span className={`w-5 h-[2px] bg-[#7B3F00] transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                        <span className={`w-5 h-[2px] bg-[#7B3F00] transition ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`w-5 h-[2px] bg-[#7B3F00] transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="bg-[#FDF6EC] px-4 py-3 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <CustomNavLink
                                key={link.label}
                                link={link}
                                active={active}
                                onClick={(e) => handleNavClick(e, link.href)}
                            />
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
