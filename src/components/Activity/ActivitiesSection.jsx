import { useEffect, useRef, useState } from "react";
import { activitiesData, activitiesBanner } from "../../data/Activities";
export default function ActivitiesSection() {
    const [visible, setVisible] = useState([]);
    const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const cardRefs = useRef([]);

    // 🔹 Detect reduced motion preference
    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleChange = (e) => setReduceMotion(e.matches);
        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);

    // 🔹 Scroll reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setVisible((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    // 🔹 Controlled tilt (disabled if reduced motion)
    const handleMouseMove = (e, index) => {
        if (reduceMotion) return;

        const card = cardRefs.current[index];
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -5;
        const rotateY = ((x / rect.width) - 0.5) * 5;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
    };

    return (
        <section id="activities" className="bg-[#FDF6EC] py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D1A00]">
                        Our Activities
                    </h2>
                    <p className="text-[#A0522D] text-sm tracking-widest mt-2">
                        Explore Our Business Ventures
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6 perspective-[1200px]">
                    {activitiesData.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => (cardRefs.current[index] = el)}
                            data-index={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`group relative rounded-2xl p-7 bg-[#2B1A12] shadow-lg transform-gpu will-change-transform transition-all duration-500 ease-out ${visible.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                } hover:shadow-2xl`}
                            style={{
                                transitionDelay: reduceMotion ? "0ms" : `${index * 100}ms`,
                            }}
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D2691E]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                            {/* Content */}
                            <div className="relative z-10 space-y-3">
                                <h3 className="text-[#FDF6EC] text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-[#D2956A] text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="overflow-hidden rounded-xl border border-[#D2B48C]/25">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-36 object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] px-3 py-1 rounded-full bg-[#E8D5C0]/10 text-[#E8D5C0] border border-[#E8D5C0]/20 transition duration-200 hover:bg-[#E8D5C0]/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow */}
                                <div className="absolute right-5 bottom-5 w-8 h-8 rounded-full border border-[#E8D5C0]/35 flex items-center justify-center transition duration-300 hover:bg-[#E8D5C0]/15 hover:border-[#E8D5C0]/60">
                                    →
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div className="mt-16 rounded-2xl px-8 py-6 flex items-center gap-5 bg-gradient-to-r from-[#F5E6C8] via-[#EDD9A3] to-[#F5E6C8] shadow-inner">
                    <div className="w-12 h-12 rounded-xl bg-[#7B3F00] flex items-center justify-center px-1 text-[11px] font-semibold leading-tight tracking-wide text-[#F5E6C8] text-center">
                        {activitiesBanner.icon}
                    </div>

                    <div>
                        <h4 className="text-[#3D1A00] font-bold text-lg">
                            {activitiesBanner.title}
                        </h4>
                        <p className="text-[#A0522D] text-xs tracking-widest">
                            {activitiesBanner.subtitle}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
