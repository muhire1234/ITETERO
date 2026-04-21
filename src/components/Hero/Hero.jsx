import { useEffect, useState } from "react";
import herobg from "../../assets/images/herobg.png";

export default function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    // 🔹 Parallax scroll
    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY * 0.4);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* 🔹 Background with parallax */}
            <div
                className="absolute inset-0 will-change-transform"
                style={{ transform: `translateY(${offsetY}px)` }}
            >
                <img
                    src={herobg}
                    alt="Coffee background"
                    className="w-full h-full object-cover object-right md:object-center "
                style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                />

                {/* 🔹 Gradient overlay */}
            </div>

            {/* 🔹 Content */}
            <div className="relative max-w-6xl mx-auto px-4 w-full">
                <div className="grid md:grid-cols-2 gap-10 items-center py-24">
                    {/* LEFT */}
                    <div
                        className="space-y-6 transform transition-all duration-700 ease-out translate-y-0 opacity-100"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Fresh Coffee. <br />
                            Real Experience.
                        </h1>

                        <p className="text-[#7B3F00] md:text-lg max-w-md">
                            Discover handcrafted beverages and delicious meals made with
                            passion. A place where taste meets comfort.<h3 className="text-brown md:text-lg font-semibold">AT ITETEROCourtyardCoffeeShop</h3>
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="relative px-6 py-3 rounded-full bg-[#7B3F00] text-[#FDF6EC] text-sm font-semibold overflow-hidden group"
                            >
                                <span className="relative z-10">Visit Us</span>
                                <span className="absolute inset-0 bg-[#A0522D] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>

                            <a
                                href="#menu"
                                className="px-6 py-3 rounded-full border border-[#7B3F00] text-[#7B3F00] text-sm font-semibold hover:bg-[#7B3F00] hover:text-[#FDF6EC] transition-all duration-300"
                            >
                                View Menu
                            </a>
                        </div>
                    </div>

                    {/* RIGHT (floating visual accent) */}
                    <div className="hidden md:flex justify-center items-center relative">
                        <div
                            className="w-64 h-64 rounded-full bg-[#7B3F00]/10 blur-3xl absolute"
                            style={{ transform: `translateY(${offsetY * 0.6}px)` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
