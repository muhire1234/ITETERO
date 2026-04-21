import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { activitiesDelivery } from "../../data/Activities";

const navLinks = [
    { label: "Home", href: "#home", route: "/" },
    { label: "Our Activities", href: "#activities", route: "/" },
    { label: "About Us", href: "#about", route: "/" },
    { label: "Menu", href: "#menu", route: "/menu" },
    { label: "Gallery", href: "#gallery", route: "/gallery" },
    { label: "Contact", href: "#contact", route: "/" },
];

function DeliveryIcon({ className = "" }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.5 14.5h2.8" />
            <path d="M1.8 17h4.2" />
            <circle cx="7.2" cy="17.4" r="2.1" />
            <circle cx="17.6" cy="17.4" r="2.1" />
            <path d="M9.2 17.4h6.3l1.9-4.6h-5.2l-2.1-2.8H7.9" />
            <path d="M12 8.2h2.7l2 2.2" />
            <path d="M14.3 6.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" />
            <path d="M10.4 10.8 8.9 8.9" />
            <path d="M18.9 10.3h2.6" />
            <path d="M19.7 7.9h2" />
        </svg>
    );
}

// 🔹 Reusable NavLink
function CustomNavLink({ link, active, onClick }) {
    const id = link.href.replace("#", "");

    if (link.route !== "/") {
        return (
            <NavLink
                to={link.route}
                onClick={onClick}
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
    const location = useLocation();

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

    useEffect(() => {
        if (!location.hash) return;

        const frame = window.requestAnimationFrame(() => {
            const section = document.querySelector(location.hash);
            if (!section) return;

            const navbarOffset = 96;
            const top =
                section.getBoundingClientRect().top + window.scrollY - navbarOffset;

            window.scrollTo({ top, behavior: "smooth" });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [location.hash, location.pathname]);

    // 🔹 Smooth scroll (no CSS needed)
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
            return;
        }

        navigate({ pathname: "/", hash: href });
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
                    <div className="hidden md:flex items-center gap-5">
                        <ul className="flex gap-7">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <CustomNavLink
                                        link={link}
                                        active={active}
                                        onClick={
                                            link.route === "/"
                                                ? (e) => handleNavClick(e, link.href)
                                                : () => setIsOpen(false)
                                        }
                                    />
                                </li>
                            ))}
                        </ul>

                        <div className="relative group">
                            <a
                                href={activitiesDelivery.href}
                                aria-label={`Call ${activitiesDelivery.phone}`}
                                className="flex h-12 w-12 items-center justify-center text-[#7B3F00] transition duration-300 hover:scale-110 hover:text-[#5C2E00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B3F00]"
                            >
                                <DeliveryIcon className="h-7 w-7" />
                            </a>

                            <div className="pointer-events-none absolute right-0 top-[calc(100%+0.75rem)] hidden min-w-max rounded-xl bg-[#2B1A12] px-3 py-2 text-xs font-semibold text-[#FDF6EC] shadow-lg group-hover:block group-focus-within:block">
                                <p>Call Now</p>
                                <p className="mt-1 tracking-[0.18em] text-[#E8D5C0]">
                                    {activitiesDelivery.phone}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-3">
                        <a
                            href={activitiesDelivery.href}
                            aria-label={`Call ${activitiesDelivery.phone}`}
                            className="flex h-11 w-11 items-center justify-center text-[#7B3F00] transition duration-300 hover:scale-110 hover:text-[#5C2E00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7B3F00]"
                        >
                            <DeliveryIcon className="h-6 w-6" />
                        </a>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col gap-1"
                        >
                            <span className={`w-5 h-[2px] bg-[#7B3F00] transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                            <span className={`w-5 h-[2px] bg-[#7B3F00] transition ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`w-5 h-[2px] bg-[#7B3F00] transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                        </button>
                    </div>
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
                                onClick={
                                    link.route === "/"
                                        ? (e) => handleNavClick(e, link.href)
                                        : () => setIsOpen(false)
                                }
                            />
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
